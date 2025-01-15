from rest_framework import serializers

def create_serializer_class(name, fields, base_class=None):
    if base_class and issubclass(base_class, serializers.Serializer):
        return type(name, (base_class,), fields)
    return type(name, (serializers.Serializer,), fields)


def inline_serializer(*, fields, name='', data=None, base_class=None, **kwargs):
    serializer_class = create_serializer_class(name=name, fields=fields, base_class=base_class)

    if data is not None:
        return serializer_class(data=data, **kwargs)

    return serializer_class(**kwargs)