from django.db import models
import uuid
#from db.models import BaseForeignKey


class Member(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=256, blank=False, null=True)
    last_name  = models.CharField(max_length=256, blank=True, null=True)
    email = models.CharField(max_length=256, blank=True, null=True)
    phone = models.CharField(max_length=10, blank=False, null=False)
    driving_license_number = models.CharField(max_length=256, blank=True, null=True)
    driving_license_valid_from = models.CharField(max_length=256, blank=True, null=True)

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
        super(Member, self).save(*args, **kwargs)