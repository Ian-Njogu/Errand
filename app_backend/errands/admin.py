from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Location, Service, ServiceVariant, Order, Payment

admin.site.register(User, UserAdmin)
admin.site.register(Location)
admin.site.register(Service)
admin.site.register(ServiceVariant)
admin.site.register(Order)
admin.site.register(Payment)
