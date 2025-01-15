from django.db import models
from config.settings import AUTH_USER_MODEL
from django.utils.translation import gettext_lazy as _


class AtBaseModel(models.Model):
    """Время создания и обновления"""
    created_at = models.DateTimeField(
        verbose_name=_('Created at'),
        auto_now_add=True,
        editable=False,
        db_index=True
    )

    updated_at = models.DateTimeField(
        verbose_name=_('Updated at'),
        auto_now=True,
        null=True,
        blank=True
    )
    
    class Meta:
        abstract = True


class ByBaseModel(models.Model):
    """ Кто создал и обновил """
    created_by = models.ForeignKey(
        to=AUTH_USER_MODEL,
        verbose_name=_('Created by'),
        null=True,
        blank=True,
        related_name='%(class)s_created',
        on_delete=models.SET_NULL
    )

    updated_by = models.ForeignKey(
        to=AUTH_USER_MODEL,
        verbose_name=_('Updated by'),
        null=True,
        blank=True,
        related_name='%(class)s_updated',
        on_delete=models.SET_NULL
    )
    
    class Meta:
        abstract = True

class BaseModel(AtBaseModel, ByBaseModel):

    class Meta:
        abstract = True

    def update(self, commit=False, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        if commit:
            self.save()