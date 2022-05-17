from flask_restful import Resource
from flask.globals import request
from db.models.member import Member
from apis.views.member_profile import legacy_member_view

from utils.resource import BaseResource
from utils.response import error_response, ok_response

from validators.signup import validate_post_data, validate_put_data 

class SignUp(BaseResource):
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
        password = request_data["password"]
        phone = request_data["phone_number"]
        first_name = request_data["first_name"]
        last_name = request_data.get("last_name")
        email = request_data["email"]
        driving_license_number = request_data.get("driving_license_number")
        driving_license_valid_from = request_data.get("driving_license_valid_from")             
        #dummy_customer_id = request_data.get("dummy_customerId")
        #request_id = request.headers.get("Request-Id")
        
        member = Member.objects.filter(phone=phone).first()

        if not member:
            member = Member.objects.create(phone=phone)
            member.first_name = first_name
            member.last_name = last_name
            member.email = email
            member.driving_license_number = driving_license_number
            member.driving_license_valid_from = driving_license_valid_from
            member.password = password
            member.save()

        resp = legacy_member_view(member)
        if resp:
            return ok_response(legacy_member_view(member))       

        
        errors = validate_post_data(request_data)
        if errors:
            return error_response(400, errors)

        return error_response(401, [])


    def delete(self, id=None):
        return error_response(401, [])

