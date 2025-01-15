# devNotes backend

**devNotes backend - сервеная часть сайта**

# Требования

* Python 3.11
* Django 4.1, 4.0
* Djangorestframework >= 3.14.0

**Настоятельно рекомендуется** поддерживать только последние выпуски исправлений для каждой серии Python и Django.

## Монтаж

Установить используя `ssh`...
```bash
git clone https://github.com/Infinity-CHL/devNotes-backend.git
```
## Установка зависимостей

*Убедитесь что у вас создано и активированно виртуальное окружение.*
Для создания виртуального окружения:
```python 
python -m venv venv
```
Для активации виртуального окружения:

*windows*:
```python 
venv/scripts/activate
```
*unix*:
```python 
source venv/bin/activate
```
**После можно установить все зависимости:**

```python 
pip install pip-tools
pip-compile
pip-sync
```
## Настройка
```python 
python manage.py makemigrations
python manage.py migrate
```
## Создание cуперпользователя
```python 
python manage.py createsuperuser
```
## Использование

```python 
python manage.py runserver
```




