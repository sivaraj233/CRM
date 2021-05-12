from django.urls import path

from . import views

urlpatterns = [
    path('projectcategory/', views.ProjectCategoryList.as_view(), name='projectcategory_list'),
    path('projectdetails/', views.ProjectDetailsList.as_view(), name='projectdetails_list'),
    path('userDetails/', views.UserDetail.as_view(), name='user-details'),
]
