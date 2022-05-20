from flask_restful import Resource
from flask.globals import request
from itsdangerous import json
from apis.views.all_rides import all_rides_view
from db.models.member_car import MemberCar
from db.models.car import Car

from db.models.ride import Ride


from utils.resource import BaseResource
from utils.response import error_response, ok_response

from validators.getallrides import validate_post_data, validate_put_data  

class GetAllRides(BaseResource):
    def get(self, id=None):
        param_json = request.args.to_dict() 
        start_location = param_json.get("start_location")
        end_location = param_json.get("end_location")
        ride_date = param_json.get("ride_date")
        no_of_passengers = param_json.get("no_of_paasengers")
        result = Ride.objects.filter(seats_offered__gte = no_of_passengers,ride_date = ride_date, source_city_id = start_location, destination_city_id = end_location)
        member_car_id = result.member_car_id
        member_car = MemberCar.objects.get(id=member_car_id)
        car = Car.objects.get(id=member_car.car_id)
        
        if(result):
            resp = all_rides_view(result,car.name)
            return ok_response(resp)
        
        return error_response(401, [])


    def put(self, id=None):
        request_data = request.get_json(force=True) 

        errors = validate_put_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def post(self):
        request_data = request.get_json(force=True) 
        
        errors = validate_post_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def delete(self, id=None):
        return error_response(401, [])

