"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

user_temp = [{
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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



# User endpoints


@api.route('/get_all_users/', methods=['GET'])
def get_all_users():

    return jsonify(user_temp), 200

@api.route('/get_user/<int:user_id>', methods=['GET'])
def get_user(user_id):

    return jsonify(user_temp[user_id]), 200

@api.route('add_user', methods=['POST'])
def add_user():
    id=9
    req_Json = request.get_json()
    req_Json["id"] = str(id)
    user_temp.append(req_Json)
    return jsonify(user_temp), 200

@api.route('edit_user/<int:user_id>', methods=['PUT'])
def edit_user(user_id):
    req_Json = request.get_json()
    for user in user_temp:
        print(user["id"])
        print(user_id)
        if user["id"]==user_id:
            user = req_Json
            return jsonify(user_temp), 200
    return "user not found", 404

@api.route('delete_user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    req_Json = request.get_json()
    del user_temp[user_id]
    return jsonify(user_temp), 200


# Change endpoints


@api.route('/get_all_changes/', methods=['GET'])
def get_all_change():

    return jsonify(change_temp), 200

@api.route('/get_change/<int:change_id>', methods=['GET'])
def get_change(change_id):

    return jsonify(change_temp[change_id]), 200

@api.route('add_change/<int:change_id>', methods=['POST'])
def add_change(change_id):
    req_Json = request.get_json()
    req_Json["change_id"] = str(change_id)
    change_temp.append(req_Json)
    return jsonify(change_temp), 200

@api.route('edit_change/<int:change_id>', methods=['PUT'])
def edit_change(change_id):
    req_Json = request.get_json()
    change_temp[change_id] = req_Json
    return jsonify(change_temp), 200

@api.route('delete_change/<int:change_id>', methods=['DELETE'])
def delete_change(change_id):
    req_Json = request.get_json()
    del change_temp[change_id]
    return jsonify(change_temp), 200


# Bank_account endpoints


@api.route('/get_all_bank_accounts/', methods=['GET'])
def get_all_bank_account():

    return jsonify(bank_account_temp), 200

@api.route('/get_bank_account/<int:bank_account_id>', methods=['GET'])
def get_bank_account(bank_account_id):

    return jsonify(bank_account_temp[bank_account_id]), 200

@api.route('add_bank_account/<int:bank_account_id>', methods=['POST'])
def add_bank_account(bank_account_id):
    req_Json = request.get_json()
    req_Json["bank_account_id"] = str(bank_account_id)
    bank_account_temp.append(req_Json)
    return jsonify(bank_account_temp), 200

@api.route('edit_bank_account/<int:bank_account_id>', methods=['PUT'])
def edit_bank_account(bank_account_id):
    req_Json = request.get_json()
    bank_account_temp[bank_account_id] = req_Json
    return jsonify(bank_account_temp), 200

@api.route('delete_bank_account/<int:bank_account_id>', methods=['DELETE'])
def delete_bank_account(bank_account_id):
    req_Json = request.get_json()
    del bank_account_temp[bank_account_id]
    return jsonify(bank_account_temp), 200



# Transaction endpoints


@api.route('/get_all_transactions/', methods=['GET'])
def get_all_transaction():

    # agregar paginacion

    return jsonify(transaction_temp), 200

@api.route('/get_transaction/<int:transaction_id>', methods=['GET'])
def get_transaction(transaction_id):

    return jsonify(transaction_temp[transaction_id]), 200

@api.route('add_transaction/<int:transaction_id>', methods=['POST'])
def add_transaction(transaction_id):
    req_Json = request.get_json()
    req_Json["transaction_id"] = str(transaction_id)
    transaction_temp.append(req_Json)
    return jsonify(transaction_temp), 200

@api.route('edit_transaction/<int:transaction_id>', methods=['PUT'])
def edit_transaction(transaction_id):
    req_Json = request.get_json()
    transaction_temp[transaction_id] = req_Json
    return jsonify(transaction_temp), 200

@api.route('delete_transaction/<int:transaction_id>', methods=['DELETE'])
def delete_transaction(transaction_id):
    req_Json = request.get_json()
    del transaction_temp[transaction_id]
    return jsonify(transaction_temp), 200



