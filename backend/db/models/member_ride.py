from django.db import models
from db.models.member import Member
from db.models.ride import Ride
import uuid

class MemberRide(models.Model):
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    ride_id = models.ForeignKey(Ride, on_delete=models.CASCADE)

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
        super(MemberRide, self).save(*args, **kwargs)


