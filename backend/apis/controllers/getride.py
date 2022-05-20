import imp
from flask_restful import Resource
from flask.globals import request

from utils.resource import BaseResource
from utils.response import error_response, ok_response
from db.models.ride import Ride
from db.models.member_ride import MemberRide
from apis.views.ride import ride_view

from validators.getride import validate_post_data, validate_put_data  

class GetRide(BaseResource):
    def get(self, id=None):
        #param_json = request.args.to_dict()
        ride_id = id 
        ride = Ride.objects.get(id=ride_id) 
        resp = ride_view(ride)
        return ok_response(resp)


    def put(self, id=None):
        request_data = request.get_json(force=True) 

        errors = validate_put_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def post(self):
        # request_data = request.get_json(force=True)
        # ride_id = request_data["ride_id"]
        # member_id = request_data["member_id"]

        # MemberRide.objects.filter(ride_id=ride_id, member_id=member_id)
        


        
        errors = validate_post_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def delete(self, id=None):
        return error_response(401, [])

