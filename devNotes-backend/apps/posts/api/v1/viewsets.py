from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from apps.core.utils import inline_serializer
from apps.core.serializers import BaseSerializer
from .services import PostService

class GetPostList(APIView):
    class OutputSerializer(BaseSerializer):
        id = serializers.IntegerField()
        title = serializers.CharField()
        content = serializers.CharField()
        view_count = serializers.IntegerField()
        image = serializers.ImageField()
        read_time = serializers.IntegerField()
        likes_count = serializers.IntegerField()
        category = inline_serializer(name = "GetPostListCategory", fields={
            "id": serializers.IntegerField(),
            "title": serializers.CharField()
            })
        

    def get(self, request):
        posts = PostService.get_posts()
        serializer = self.OutputSerializer(instance=posts, many = True)
        return Response({"results": serializer.data}, status=status.HTTP_200_OK)
    

class GetPost(APIView):
    class OutputSerializer(BaseSerializer):
        id = serializers.IntegerField()
        title = serializers.CharField()
        content = serializers.CharField()
        view_count = serializers.IntegerField()
        image = serializers.ImageField()
        read_time = serializers.IntegerField()
        prev_id = serializers.IntegerField()
        next_id = serializers.IntegerField()        
        category = inline_serializer(name = "GetPostCategory", fields={
            "id": serializers.IntegerField(),
            "title": serializers.CharField()
            })


    def get(self, request, post_id: int):
        posts = PostService.get_post(post_id=post_id, request=request)
        serializer = self.OutputSerializer(instance=posts)
        return Response({"results": serializer.data}, status=status.HTTP_200_OK)
        
        
#class CreatePost(APIView):
    #class InputSerializer(serializers.Serializers):
        #pass