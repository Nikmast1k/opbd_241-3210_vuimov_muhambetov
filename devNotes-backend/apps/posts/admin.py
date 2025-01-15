from django.contrib import admin
from .models import Post, PostViews, Vote, Category

class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "category", "created_at"]

admin.site.register(Post, PostAdmin)
admin.site.register(PostViews)
admin.site.register(Vote)
admin.site.register(Category)

