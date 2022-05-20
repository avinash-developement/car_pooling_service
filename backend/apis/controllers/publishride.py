from datetime import datetime
from flask_restful import Resource
from flask.globals import request
from datetime import datetime
from db.models.ride import Ride
from db.models.city import City


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
        ride_date = request_data['date']
        source_city = request_data['source_city']
        destination_city = request_data['destinion_city']
        seats_offered = request_data['seats_offered']
        contribution_per_head = request_data['cost_per_head']

        ride = Ride.objects.filter(member_car_id=member_car_id).first()

        if not ride:
            ride = Ride.objects.create(member_car_id=member_car_id)
            ride.created_on = created_on
            ride.ride_date=ride_date
            ride.source_city = source_city
            ride.destination_city = destination_city
            ride.seats_offered = seats_offered
            ride.contribution_per_head = contribution_per_head

            city1 = City.objects.filter(city_name = source_city)
            if not city1:
                city1.city_name = source_city
                city1.save()

            city2 = City.objects.filter(city_name = destination_city)
            if not city2:
                city2.city_name = destination_city
                city2.save()

            ride.source_city_id = city1.id
            ride.destination_city_id = city2.id
            ride.save()
            
            if ride:
                return ok_response()
        
        errors = validate_post_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])
        

    def delete(self, id=None):
        return error_response(401, [])






        

        





