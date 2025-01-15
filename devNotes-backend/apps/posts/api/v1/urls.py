from django.urls import path
from . import viewsets

urlpatterns = [
    path('', viewsets.GetPostList.as_view()),
    path('<int:post_id>/', viewsets.GetPost.as_view()),
]