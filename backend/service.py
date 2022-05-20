import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoservice.settings')
django.setup()

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import flask_restful as restful

#SERVICE LAYER IMPORTS
from apis.controllers.getride import GetRide
from apis.controllers.getallrides import GetAllRides
from apis.controllers.publishride import PublishRide
from apis.controllers.signup import SignUp
from apis.controllers.testapi1 import TestApi1




app = Flask(__name__)

api = restful.Api(app, prefix='/carpooling/v1/')

# #API END POINTS
api.add_resource(GetRide, 'getride/', 'getride/<string:id>')
api.add_resource(GetAllRides, 'getallrides/', 'getallrides/<string:id>')
api.add_resource(PublishRide, 'publishride/', 'publishride/<string:id>')
api.add_resource(SignUp, 'signup/', 'signup/<string:id>')
api.add_resource(TestApi1, 'testapi1/', 'testapi1/<string:id>')



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8048, debug=True)