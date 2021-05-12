from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.authtoken.admin import User
from rest_framework.response import Response

from . import models, serializers
from crm_api import utils


class UserDetail(generics.ListCreateAPIView):
    serializer_class = serializers.UserSerializer

    def get(self,  request, *args, **kwargs):
        self.queryset = models.User.objects.filter(is_active=utils.ACTIVE)
        return self.list(request, *args, **kwargs)


# Create your views here.
class ProjectCategoryList(generics.ListCreateAPIView):
    serializer_class = serializers.ProjectCategorySerializer
    search_fields = ['category_description']

    def get(self, request, *args, **kwargs):
        """list all apache score list with custom pagination"""
        self.queryset = models.ProjectCategory.objects.filter(is_active=utils.ACTIVE)
        # self.pagination_class.page_size = int(request.GET.get('size', utils.PAGE_SIZE))
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_405_METHOD_NOT_ALLOWED)


# Create your views here.
class ProjectDetailsList(generics.ListCreateAPIView):
    serializer_class = serializers.ProjectDetailsSerializer
    search_fields = ['category_description']

    def get(self, request, *args, **kwargs):
        """list all apache score list with custom pagination"""
        self.queryset = models.ProjectDetails.objects.filter(is_active=utils.ACTIVE)
        # self.pagination_class.page_size = int(request.GET.get('size', utils.PAGE_SIZE))
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_405_METHOD_NOT_ALLOWED)
