# Generated by Django 4.2 on 2023-04-08 18:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                ("name", models.CharField(blank=True, max_length=180, null=True)),
                ("brand", models.CharField(blank=True, max_length=100, null=True)),
                ("category", models.CharField(blank=True, max_length=100, null=True)),
                ("description", models.TextField(blank=True, null=True)),
                (
                    "rating",
                    models.DecimalField(
                        blank=True, decimal_places=2, max_digits=4, null=True
                    ),
                ),
                ("numReviews", models.IntegerField(blank=True, default=0, null=True)),
                (
                    "price",
                    models.DecimalField(
                        blank=True, decimal_places=2, max_digits=8, null=True
                    ),
                ),
                ("countInStock", models.IntegerField(blank=True, default=0, null=True)),
                ("createAt", models.DateTimeField(auto_now_add=True)),
                (
                    "_id",
                    models.AutoField(editable=False, primary_key=True, serialize=False),
                ),
                (
                    "user",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
