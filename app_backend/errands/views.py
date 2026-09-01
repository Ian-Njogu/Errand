from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Location, Service, Order, Payment
from .serializers import LocationSerializer, ServiceSerializer, OrderSerializer

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_client:
            return Order.objects.filter(client=user)
        elif user.is_runner:
            return Order.objects.filter(runner=user) | Order.objects.filter(status='PENDING')
        return Order.objects.none()

    def perform_create(self, serializer):
        # Calculate price logic would ideally go here based on service/variant
        serializer.save(client=self.request.user, agreed_price=0.00) # Placeholder price

    @action(detail=True, methods=['patch'])
    def accept_order(self, request, pk=None):
        order = self.get_object()
        if not request.user.is_runner:
            return Response({'detail': 'Only runners can accept orders'}, status=status.HTTP_403_FORBIDDEN)
        
        if order.status != 'PENDING':
            return Response({'detail': 'Order is not pending'}, status=status.HTTP_400_BAD_REQUEST)
            
        order.runner = request.user
        order.status = 'ACCEPTED'
        order.save()
        return Response({'status': 'order accepted'})
