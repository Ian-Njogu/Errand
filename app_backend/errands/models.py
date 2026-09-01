from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Extending default user to differentiate roles and store M-Pesa phone number
    is_client = models.BooleanField(default=True)
    is_runner = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=15, unique=True, help_text="Used for M-Pesa payments (e.g., 2547XXXXXXXX)")
    
    def __str__(self):
        return self.username

class Location(models.Model):
    # e.g., "CBD", "Outside CBD", "Eastleigh", "Kamukunji", "Dubois"
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Service(models.Model):
    PRICING_TYPES = (
        ('FIXED', 'Fixed Price'),
        ('BASE', 'Base Minimum (Starts at)'),
        ('LOCATION', 'Location Based'),
        ('RANGE', 'Price Range'),
        ('DISTANCE', 'Distance Based'), # e.g., Base + Per KM
    )
    name = models.CharField(max_length=200) # e.g., "Grocery Shopping"
    description = models.TextField(blank=True)
    pricing_type = models.CharField(max_length=20, choices=PRICING_TYPES)
    base_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    price_per_km = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) # Used if PRICING_TYPE is DISTANCE
    
    def __str__(self):
        return self.name

class ServiceVariant(models.Model):
    # To handle things like: Service: "Shop Legit Check", Location: "CBD", Price: 200
    service = models.ForeignKey(Service, related_name='variants', on_delete=models.CASCADE)
    location = models.ForeignKey(Location, null=True, blank=True, on_delete=models.SET_NULL)
    description = models.CharField(max_length=200, blank=True) # e.g., "Within CBD"
    price = models.DecimalField(max_digits=10, decimal_places=2)
    max_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) # For ranges like 800 - 2000

    def __str__(self):
        return f"{self.service.name} - {self.description or (self.location.name if self.location else '')}"

class Order(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('ACCEPTED', 'Accepted by Runner'),
        ('IN_PROGRESS', 'In Progress'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    )
    client = models.ForeignKey(User, related_name='client_orders', on_delete=models.CASCADE)
    runner = models.ForeignKey(User, related_name='runner_orders', null=True, blank=True, on_delete=models.SET_NULL)
    service = models.ForeignKey(Service, on_delete=models.PROTECT)
    service_variant = models.ForeignKey(ServiceVariant, null=True, blank=True, on_delete=models.SET_NULL)
    
    task_details = models.TextField(help_text="Instructions, shopping list, or package details")
    pickup_location = models.ForeignKey(Location, related_name='pickup_orders', null=True, blank=True, on_delete=models.SET_NULL)
    dropoff_location = models.ForeignKey(Location, related_name='dropoff_orders', null=True, blank=True, on_delete=models.SET_NULL)
    pickup_address = models.CharField(max_length=255, blank=True, help_text="Specific physical address")
    dropoff_address = models.CharField(max_length=255, blank=True, help_text="Specific physical address")
    estimated_distance_km = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    
    agreed_price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Final price to be paid")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.id} - {self.service.name}"

class Payment(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('SUCCESS', 'Success'),
        ('FAILED', 'Failed'),
    )
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='payment')
    mpesa_receipt_number = models.CharField(max_length=50, blank=True, null=True, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    phone_number = models.CharField(max_length=15)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    transaction_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment for Order #{self.order.id} - {self.status}"
