from django.db.models import IntegerChoices, TextChoices
from django.utils.translation import gettext as _

class LifeTimeChoices(IntegerChoices):
    DAY = 3600 * 24 * 1, _('День')
    WEEK = 3600 * 24 * 7, _('Неделя')
    MONTH = 3600 * 24 * 30, _('Месяц')
    THREE_MONTHS = 3600 * 24 * 90, _('3 Месяца')
    SIX_MONTHS = 3600 * 24 * 180, _('6 Месяцев')
    YEAR = 3600 * 24 * 360, _('Год')


class UserTypeChoices(TextChoices):
    CUSTOMER = "customer", _("Клиент")
    VENDOR = "vendor", _("Поставщик")
    COMBO = "combo", _("Комбо")

class PostTypeChoices(TextChoices):
    POST = 'post', _("Пост")
    COMMENT = 'comment', _("Коммент")

class VoteTypeChoices(TextChoices):
    UP = 'up', _("Лайк")
    DOWN = "down", _("Дизлайк")
    BOOKMARK = "bookmark", _("Избранное")