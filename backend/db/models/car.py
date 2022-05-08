from django.db import models
import uuid
#from db.models import BaseForeignKey


class Car(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, blank=False, null=True)
    make = models.CharField(max_length=256, blank=False, null=True)
    model = models.CharField(max_length=256, blank=False, null=True)
    make_year = models.CharField(max_length=256, blank=False, null=True)
    comfort_level = models.PositiveSmallIntegerField(max_length=1, blank=False , null=True)
    

    # class Meta:
    #     ordering = ['-my_field_name']

    # Methods
    # def get_absolute_url(self):
    #     """Returns the url to access a particular instance of MyModelName."""
    #     return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.id

    
    def save(self, *args, **kwargs):
        super(Car, self).save(*args, **kwargs)