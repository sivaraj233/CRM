from django.contrib.auth.models import User, AbstractUser
from django.db import models


# Create your models here.
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)


class Role(BaseModel):
    role_name = models.CharField(max_length=10, unique=True, blank=False, null=True,
                            error_messages={'unique': "This role has already been registered.", })


class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=255, blank=False, null=False,
                              error_messages={'unique': "This email has already been registered."})
    role = models.ManyToManyField(Role, blank=False)
    image = models.TextField(blank=True, null=True)


class ProjectCategory(BaseModel):
    category_id = models.IntegerField(primary_key=True)
    category_description = models.CharField(max_length=50)

    def __str__(self):
        return '%s' % self.category_description


class ProjectDetails(BaseModel):
    project_id = models.IntegerField(null=False)
    project_description = models.CharField(max_length=50, null=True)
    project_category = models.ForeignKey(ProjectCategory, on_delete=models.CASCADE, blank=True, null=True, related_name='prjt_category')
    project_location = models.CharField(max_length=50, null=True)
    project_owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, related_name='pjt_owner')
