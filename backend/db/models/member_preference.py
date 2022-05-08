from django.db import models
from db.models.member import Member
from db.models.chitchat_preference import ChitchatPreference
from db.models.music_preference import MusicPreference
import uuid

class MemberPreference(models.Model):
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    member_id = models.ForeignKey(Member, primary_key=True ,on_delete=models.CASCADE)
    is_smoking_allowed = models.BooleanField(default=False)
    is_pet_allowed = models.BooleanField(default=False)
    music_preference_id = models.ForeignKey(MusicPreference, on_delete=models.CASCADE)
    chitchat_id = models.ForeignKey(ChitchatPreference, on_delete=models.CASCADE)

    
   



    
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
        super(MemberPreference, self).save(*args, **kwargs) 