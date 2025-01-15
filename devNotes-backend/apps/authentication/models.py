from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth.models import AbstractUser
from apps.core.models import BaseModel
from apps.core.choices import UserTypeChoices, LifeTimeChoices
from apps.core.utils import upload_to
from .managers import UserManager



class User(AbstractUser):
    session_lifetime = models.IntegerField(choices=LifeTimeChoices.choices, default=LifeTimeChoices.SIX_MONTHS, verbose_name='Врямя жизни сессий') # default = 6 Month
    first_name = models.CharField(_('Имя'), max_length=50) # Not NULL
    last_name = models.CharField(_('Фамилия'), max_length=50, null=True) # NULL
    is_active = models.BooleanField(_('active'), default=True, help_text=_('Снимите этот флажок, чтобы заблокировать пользователя')) # default = True
    is_verified = models.BooleanField(_('verified'), default=False, help_text=_('Снимите этот флажок, чтобы пользователь заново верифицировал себя, залогиниться не сможет без верификации')) # default = False
    date_of_birth = models.DateField(null=True, verbose_name='Дата рождения') # NULL
    country = models.CharField(max_length=50, verbose_name='Страна') # Not NULL
    city = models.CharField(max_length=50, null=True, verbose_name='Город') # NULL
    street = models.CharField(max_length=50, null=True, verbose_name='Улица') # NULL

    image = models.ImageField(max_length=250, upload_to=upload_to('images/user'), null=True, verbose_name='Аватарка') # NULL
    verification_code = models.IntegerField(null=True, verbose_name = 'Верификационный код') # Null
    verification_created_at = models.DateTimeField(null=True, blank=True, help_text=_('Нужно для проверки времени жизни верификационного кода'), verbose_name = 'Дата отправки верификационного кода') # Null
    email_verified = models.BooleanField(_('E-MAIL верифицирован'), default=False) # default = False

    #objects = UserManager()

    class Meta:
        ordering = ['-date_joined']
        verbose_name = 'Пользователя'
        verbose_name_plural = 'Пользователи'


class CustomSession(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "sessions")
    refresh_token = models.CharField(max_length=255)
    access_token = models.CharField(max_length=255)
    ip_addr = models.GenericIPAddressField(default="45.243.82.169")
    is_active = models.BooleanField(default=True)
    device_name = models.CharField(max_length=255, default='')
    device_type = models.CharField(max_length=255, default='')
    location = models.CharField(default="", max_length=255, blank=True, db_index=True) 
    
    def __str__(self):
        return self.refresh_token

    class Meta:
        ordering = ['-updated_at']
        verbose_name = 'Сеанс'
        verbose_name_plural = 'Сеансы'