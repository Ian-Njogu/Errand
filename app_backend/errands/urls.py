from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, ServiceViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
