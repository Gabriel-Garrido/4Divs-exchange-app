"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

user_temp = [{
    "user_id": "1",
    "rut": "jose",
    "email": "jose@gmail.com"
}]



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "user": "pepito"
    }

    return jsonify(response_body), 200

@api.route('/user/<int:user_id>', methods=['GET', 'POST'])
def get_user(user_id):
    if request.method == "GET":
        return jsonify({"response": "call GET request"})

    elif request.method == "POST":
        req_Json = request.get_json()
        user_temp.append(req_Json)
        return jsonify(user_temp), 200