from django.db import models
from db.models.member import Member
from db.models.car import Car
import uuid

class MemberCar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
    car_registration_number = models.CharField(max_length=50, blank=False, null=False)
    car_color = models.CharField(max_length=10, blank=False, null=False)


    
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
        super(MemberCar, self).save(*args, **kwargs) 