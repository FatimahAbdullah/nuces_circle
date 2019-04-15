from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('student_signup', views.student_signup, name='student_signup'),
    path('',views.home),
    path('student/',include ('student.urls')),
    path('company/',include ('company.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
