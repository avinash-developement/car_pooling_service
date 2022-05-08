from datetime import datetime
from flask_restful import Resource
from flask.globals import request
from datetime import datetime

from utils.resource import BaseResource
from utils.response import error_response, ok_response

from validators.publishride import validate_post_data, validate_put_data  

class PublishRide(BaseResource):
    def get(self, id=None):
        param_json = request.args.to_dict() 
        return error_response(401, [])


    def put(self, id=None):
        request_data = request.get_json(force=True) 

        errors = validate_put_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def post(self):
        request_data = request.get_json(force=True)
        
        member_car_id = request_data['member_car_id'] 
        created_on = datetime.now()
        # travel_start_time = request_data['start_time']
        # source_city_id = request_data['source_city_id']
        destination_city_id = request_data['destinion_city_id']
        seats_offered = request_data['seats_offered']
        contribution_per_head = request_data['cost_per_head']

        ride = Ride.objects.filter(member_car_id=phone).first()






        
        # errors = validate_post_data(request_data)
        # if errors:
        #     return error_response(400, errors)

        # return error_response(401, [])

        




    def delete(self, id=None):
        return error_response(401, [])

