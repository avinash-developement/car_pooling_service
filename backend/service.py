import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoservice.settings')
django.setup()

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import flask_restful as restful

#SERVICE LAYER IMPORTS



app = Flask(__name__)

api = restful.Api(app, prefix='/travelapp/v1/')

# #API END POINTS

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8048, debug=True)