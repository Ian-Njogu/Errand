from rest_framework import serializers
from .models import User, Location, Service, ServiceVariant, Order, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_client', 'is_runner', 'phone_number']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class ServiceVariantSerializer(serializers.ModelSerializer):
    location_name = serializers.ReadOnlyField(source='location.name')

    class Meta:
        model = ServiceVariant
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    variants = ServiceVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    service_name = serializers.ReadOnlyField(source='service.name')
    client_name = serializers.ReadOnlyField(source='client.username')
    runner_name = serializers.ReadOnlyField(source='runner.username')

    class Meta:
        model = Order
        fields = '__all__'
        read_only_fields = ['client', 'agreed_price', 'status']
