"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "user": "pepito"
    }

    return jsonify(response_body), 200

@api.route('/user/1', methods=['POST'])
def new_user():

    request = request.get_json()

    return jsonify(request), 200

@api.route('/user/1', methods=['GET'])
def new_user():

    response_body = User.serialize(self)
    return response_body, 200