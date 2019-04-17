from django.urls import path
from . import views

urlpatterns = [
    path('feed',views.feed, name="home"),
    path('profile', views.profile, name="profile"),
    path('edit', views.edit, name="edit"),
    path('connections', views.connections, name="connections"),
]
