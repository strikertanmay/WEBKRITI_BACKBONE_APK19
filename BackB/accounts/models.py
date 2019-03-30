from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_customer = models.BooleanField(default=True)
    is_moderator = models.BooleanField(default=False)

    def __str__(self):
        return self.username
