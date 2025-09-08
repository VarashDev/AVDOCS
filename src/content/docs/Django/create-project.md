---
title: Create a Django project
---

[YouTube Tutorial](https://www.youtube.com/watch?v=7qPaBR6JlQY) 

```
python3 -m venv venv
source venv/bin/activate
pip install django
django-admin startproject mysite .
```
add 'templates' & 'static' folders (where manage.py is)

```
python3 manage.py startapp home
python3 manage.py startapp accounts
```
```diff title="mysite/settings.py"
INSTALLED_APPS = [
+ 'home',
+ 'accounts',
'django.contrib.admin',
...
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
-         'DIRS': [],
+         'DIRS': [BASE_DIR/'templates'],
...
STATIC_URL = 'static/'
+STATICFILES_DIRS = [
+    BASE_DIR / "static",
+    "/var/www/static/",
+]
```
``` diff title="static/css/src/input.css"
@import "tailwindcss";
```
### Nav Component
```diff title="templates/includes/nav.html"
<p>Nav</p>
```
```diff title="templates/base.html"
<!DOCTYPE html>
<html lang="en">
<head>
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/src/output.css' %}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}My amazing site{% endblock %}</title>
</head>

<body>
    <div id="nav">
        {% include "includes/nav.html" %}
    </div>

    <div id="content">
        {% block content %}{% endblock %}
    </div>
</body>
</html>
```
### custom user model 
```diff title="accounts/models.py"
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    pass
```
```diff title="home/views.py"
from django.shortcuts import render

def home(request):
    return render(request, "home/home.html")
```
```diff title="home/templates/home/home.html"
{% extends "base.html" %}

{% block content %}
<h1>Home</h1>
{% endblock %}
```
```diff title="home/urls.py"
from django.urls import path
from .views import home

urlpatterns = [
    path("", home, name="home")
]
```
```diff title="mysite/urls.py"
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("home.urls"))
]
```
```diff title="mysite/settings.py"
at the bottom

AUTH_USER_MODEL = 'accounts.CustomUser'
```
```
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

