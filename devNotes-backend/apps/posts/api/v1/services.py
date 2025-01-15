from django.db.models import Count, Q, Subquery, F
from rest_framework import exceptions
from apps.posts.models import Post, PostViews, Vote
from apps.core.utils import get_ip
from apps.core.choices import *

class PostService:

    @classmethod
    def get_posts(cls):
        posts = Post.objects.select_related("created_by", "category", "updated_by")
        posts = posts.prefetch_related("post_views", "votes")
        posts = posts.annotate(
            view_count = Count("post_views"),
            likes_count = Count("votes", filter=Q(votes__type = VoteTypeChoices.UP))
            ).all()
        return posts
    
    @classmethod
    def get_post(cls, request, post_id):
        ip = get_ip(request)

        # next_id = Post.objects.filter(id__gt = post_id).order_by('id').first().id
        # print(next_id)
        _next = Subquery(Post.objects.filter(id__gt=post_id).order_by('id').values('id')[:1])
        _prev = Subquery(Post.objects.filter(id__lt=post_id).order_by('-id').values('id')[:1])
        try:
            PostViews.objects.get_or_create(post_id = post_id, ip_addr = ip)
            post = Post.objects.annotate(
                view_count = Count("post_views"),
                prev_id = _prev,
                next_id=_next
                ).get(id=post_id)
        except Post.DoesNotExist:
            raise exceptions.NotFound
        except: 
            raise exceptions.NotFound

        return post
    
