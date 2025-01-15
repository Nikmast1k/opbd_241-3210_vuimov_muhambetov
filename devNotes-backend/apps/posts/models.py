from django.db import models
from apps.core.models import BaseModel
from apps.core.choices import VoteTypeChoices
from apps.core.utils import upload_to

class Category(models.Model):
    title = models.CharField(max_length = 25)
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Кактегорию"
        verbose_name_plural = "Категории"
    

class Post(BaseModel):
    # type = models.CharField(choices=PostTypeChoices.choices)
    category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name = "posts")
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to=upload_to('images/post'), null=True)
    read_time = models.IntegerField(default = 0)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Пост"
        verbose_name_plural = "Посты"

class PostViews(models.Model):
    ip_addr = models.GenericIPAddressField(default="45.243.82.169")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="post_views",)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Просмотр"
        verbose_name_plural = "Просмотры"


class Vote(BaseModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="votes")
    type = models.CharField(choices=VoteTypeChoices.choices, max_length=15)

    def __str__(self):
        return u"Vote: %s, %s, %s" % (self.post_id, self.created_by.username, self.get_type_display())


