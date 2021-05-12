from rest_framework import serializers
from rest_framework.authtoken.admin import User

from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProjectCategory
        fields = ['category_id', 'category_description']

    def create(self, validated_data):
        category = models.ProjectCategory(**validated_data)
        category.save()
        return category

    def update(self, instance, validated_data):
        models.ProjectCategory.objects.filter(id=instance.id).update(**validated_data)
        return models.ProjectCategory.objects.get(id=instance.id)


class ProjectDetailsSerializer(serializers.ModelSerializer):
    category_name = serializers.RelatedField(source='ProjectCategory.category_description', read_only=True)
    category_list = ProjectCategorySerializer(many=False, read_only=True)
    class Meta:
        model = models.ProjectDetails
        fields = ['project_id', 'project_description', 'project_category', 'category_name',
                  'project_location', 'project_owner', 'category_list']

    def create(self, validated_data):
        category = models.ProjectDetails(**validated_data)
        category.save()
        return category

    def update(self, instance, validated_data):
        models.ProjectDetails.objects.filter(id=instance.id).update(**validated_data)
        return models.ProjectDetails.objects.get(id=instance.id)
