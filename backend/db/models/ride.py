import imp
from signal import default_int_handler
from tkinter import CASCADE
from django.db import models
import uuid
from db.models.member_car import MemberCar
from db.models.city import City

from sqlalchemy import ForeignKey
#from db.models import BaseForeignKey


class Ride(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    member_car_id = models.ForeignKey(MemberCar, on_delete=models.CASCADE)
    created_on =  models.DateTimeField(auto_now_add=True)
    travel_start_time = models.DateTimeField(auto_now_add=True)
    source_city_id = models.OneToOneField(City,on_delete=models.CASCADE)
    destination_city_id = models.OneToOneField(City,on_delete=models.CASCADE)
    seats_offered = models.PositiveIntegerField(default=0, null=True)
    contribution_per_head = models.PositiveIntegerField(default=0, null=True)



    # name = models.CharField(max_length=256, blank=False, null=True)
    # make = models.CharField(max_length=256, blank=False, null=True)
    # model = models.CharField(max_length=256, blank=False, null=True)
    # make_year = models.CharField(max_length=256, blank=False, null=True)
    # comfort_level = models.PositiveSmallIntegerField(max_length=1, blank=False , null=True)
    

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
        super(Ride, self).save(*args, **kwargs)