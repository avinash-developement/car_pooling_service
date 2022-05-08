from flask_restful import Resource
from flask.globals import request
from itsdangerous import json
from db.models.ride import Ride

from utils.resource import BaseResource
from utils.response import error_response, ok_response

from validators.getallrides import validate_post_data, validate_put_data  

class GetAllRides(BaseResource):
    def get(self, id=None):
        param_json = request.args.to_dict() 
        start_location = param_json.get("start_location")
        end_location = param_json.get("end_location")
        date = param_json.get("date")
        no_of_passengers = param_json.get("no_of_paasengers")
        result = Ride.objects.filter(source_city_id = start_location, destination_city_id = end_location)
        if(result):
            return ok_response(json.dumps(result))

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

