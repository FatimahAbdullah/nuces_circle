from django.urls import path
from . import views

urlpatterns = [
    path('feed',views.feed, name="home"),
    path('profile', views.profile, name="profile"),
    path('edit', views.edit, name="edit"),
    path('connections', views.connections, name="connections"),
    path('add_post', views.add_post, name="add_post"),
    path('profile_edit', views.profile_edit, name="profile_edit"),
    path('<int:student_id>', views.show, name="show"),
]
