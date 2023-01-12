"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

user_temp = [{
    "user_id": "0",
    "rut": "1234567-5",
    "email": "pepito@gmail.com",
    "password": "pepe123",
    "validate_status": "True",
    "first_name": "Pepito",
    "last_name": "Perez",
    "phone": "987654321",
    "birthdate": "01-02-1983",
    "nationality": "chilena",
    "ocupation": "arquitecto",
    "monthly_income": "2000000",
    "particular_address": "los arboles 1234",
    "department": "1020",
    },
    {
    "user_id": "1",
    "rut": "1234567-5",
    "email": "pepito@gmail.com",
    "password": "pepe123",
    "validate_status": "True",
    "first_name": "Pepito",
    "last_name": "Perez",
    "phone": "987654321",
    "birthdate": "01-02-1983",
    "nationality": "chilena",
    "ocupation": "arquitecto",
    "monthly_income": "2000000",
    "particular_address": "los arboles 1234",
    "department": "1020",
    },
    {
    "user_id": "2",
    "rut": "1234567-5",
    "email": "pepito@gmail.com",
    "password": "pepe123",
    "validate_status": "True",
    "first_name": "Pepito",
    "last_name": "Perez",
    "phone": "987654321",
    "birthdate": "01-02-1983",
    "nationality": "chilena",
    "ocupation": "arquitecto",
    "monthly_income": "2000000",
    "particular_address": "los arboles 1234",
    "department": "1020",
}
]

change_temp = [{
    "change_id": "1",
    "origin_exchange": "CLP",
    "destination_exchange": "USD",
    "exchange_rate": "890",
}]

bank_account_temp = [{
    "bank_account_id": "1",
    "user": "1234567-5",
    "country": "USA",
    "account_number": "123456789",
    "bank": "City Bank",
    "account_holder": "Pepito Perez",
    "document_type": "passaport",
    "document_id": "817916",
    "": "",
    }]

transaction_temp = [{
    "transaction_id": "1",
    "user": "1234567-5",
    "status": "True",
    "change_id": "1",
    "bank_account_id": "1",
    "date": "28-12-2022",
    "time": "14:00",
    "transaction_amount": "500000",
    "transfer_bank_id": "6475830485768",
    }]

@api.route('/get_all_users/', methods=['GET'])
def get_all_users():

    return jsonify(user_temp), 200

@api.route('/get_user/<int:user_id>', methods=['GET'])
def get_user(user_id):

    return jsonify(user_temp[user_id]), 200

@api.route('add_user/<int:user_id>', methods=['POST'])
def add_user(user_id):
    req_Json = request.get_json()
    req_Json["user_id"] = str(user_id)
    user_temp.append(req_Json)
    return jsonify(user_temp), 200

@api.route('edit_user/<int:user_id>', methods=['PUT'])
def edit_user(user_id):
    req_Json = request.get_json()
    user_temp[user_id] = req_Json
    return jsonify(user_temp), 200

@api.route('delete_user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    req_Json = request.get_json()
    del user_temp[user_id]
    return jsonify(user_temp), 200


@api.route('add_bank_account/<int:bank_account_id>', methods=['POST'])
def add_bank_account(bank_account_id):
    req_Json = request.get_json()
    bank_account_temp.append(req_Json)
    return jsonify(bank_account_temp), 200
