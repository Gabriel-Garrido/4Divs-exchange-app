"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Bank_account,Transaction, Change
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import generate_password_hash,check_password_hash

api = Blueprint('api', __name__)


# -----------------------User endpoints-------------------------------
@api.route('/get_all_users/', methods=['GET'])
@jwt_required()
def get_all_users():
    users = User.query.all()
    if (users == []):
        return "users not found", 404
    else:
        users = list(map(lambda x: x.serialize(),users))
        return jsonify(users), 200

@api.route('/get_user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return "user not found", 404   
    return user.serialize(), 200

@api.route('/get_user_by_email/<user_email>', methods=['GET'])
def get_user_by_email(user_email):
    user = User.query.filter(User.email == user_email).first()
    if user is None:
        return "user not found", 404
    return user.serialize(), 200

@api.route('/get_user_report_by_email/<user_email>', methods=['GET'])
@jwt_required()
def get_user_report_by_email(user_email):
    user = User.query.filter(User.email == user_email).first()
    transactions = list(map(lambda x: x.serialize(),Transaction.query.all()))
    user_transactions = []
    for transaction in transactions: 
        if transaction["user_id"] == user.id:
            user_transactions.append(transaction)
    return jsonify(user_transactions)

@api.route('/get_user_id_by_email/<user_email>', methods=['GET'])
def get_user_id_by_email(user_email):
    user = User.query.filter(User.email == user_email).first()
    if user is None:
        return "user not found", 404
    return user.restorePassword(), 200   
    
@api.route('/add_user', methods=['POST'])
def add_user():
    req_Json = request.get_json()
    user = User(req_Json["rut"], req_Json["email"],req_Json["password"], req_Json["first_name"], req_Json["last_name"], req_Json["phone"], req_Json["birthdate"], req_Json["nationality"], req_Json["ocupation"], req_Json["monthly_income"], req_Json["particular_address"], req_Json["department"])
    db.session.add(user)
    db.session.commit()
    return "user " + req_Json["email"] + " was created", 201

@api.route('/edit_password/<int:user_id>', methods=['PUT'])
def edit_password(user_id):
    user = User.query.get(user_id)
    if user is None:
        return "user not found", 404    
    req_Json = request.get_json()
    if req_Json["password"] is not None:
        user.password = generate_password_hash(req_Json["password"])
        db.session.add(user)
        db.session.commit()
        return user.serialize(), 200
    return "incorrect param", 400

@api.route('/edit_admin/<int:user_id>', methods=['PUT'])
def edit_admin(user_id):
    user = User.query.get(user_id)
    if user is None:
        return "user not found", 404    
    req_Json = request.get_json()
    if req_Json["admin"] is not None:
        user.admin = req_Json["admin"]
        db.session.add(user)
        db.session.commit()
        return user.serialize(), 200
    return "incorrect param", 400

@api.route('delete_user/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return "user not found", 404
    db.session.delete(user)
    db.session.commit()
    return "user was deleted", 200



# -----------------------Change endpoints-------------------------------
@api.route('/get_all_changes/', methods=['GET'])
def get_all_changes():
    changes = Change.query.all()
    if(changes == []):
        return "change rates not found", 404
    else:
        changes = list(map(lambda x: x.serialize(),changes))
        return jsonify(changes), 200

@api.route('/get_change/<int:change_id>', methods=['GET'])
@jwt_required()
def get_change(change_id):
    changes = list(map(lambda x: x.serialize(),Change.query.all()))
    for change in changes:
        if change["id"] == change_id:
            return jsonify(change), 200
        else:
            return "change not found", 404

@api.route('add_change', methods=['POST'])
@jwt_required()
def add_change():
    req_Json = request.get_json()
    change = Change(req_Json["origin_exchange"],req_Json["destination_exchange"], req_Json["exchange_rate"])
    db.session.add(change)
    db.session.commit()
    return "change was created", 201

@api.route('edit_change/<int:change_id>', methods=['PUT'])
@jwt_required()
def edit_change(change_id):
    change = Change.query.get(change_id)
    if change is None:
        return "change not found", 404    
    req_Json = request.get_json()
    if req_Json["exchange_rate"] is not None:
        change.origin_exchange = req_Json["origin_exchange"]
        change.destination_exchange = req_Json["destination_exchange"]
        change.exchange_rate = req_Json["exchange_rate"]
        db.session.add(change)
        db.session.commit()
        return change.serialize(), 200
    return "incorrect param", 400



# -----------------------Bank account endpoints-------------------------------
@api.route('/get_all_bank_accounts/', methods=['GET'])
@jwt_required()
def get_all_bank_account():
    bank_accounts = Bank_account.query.all()
    if(bank_accounts == []):
        return "bank accounts not found", 404
    else:
        bank_accounts = list(map(lambda x: x.serialize(), bank_accounts))
        return jsonify(bank_accounts), 200

@api.route('/get_bank_account/<int:bank_account_id>', methods=['GET'])
@jwt_required()
def get_bank_account(bank_account_id):
    bank_account = Bank_account.query.get(bank_account_id)
    if bank_account is None:
        return "bank_account not found", 404   
    return bank_account.serialize(), 200

@api.route('/get_bank_account_by_user_id/<int:user_id>', methods=['GET'])
@jwt_required()
def get_bank_account_by_user_id(user_id):
    all_bank_accounts = list(map(lambda x: x.serialize(),Bank_account.query.all()))
    user_bank_accounts = []
    for bank_account in all_bank_accounts:
        if bank_account["user_id"] == user_id:
            user_bank_accounts.append(bank_account)
    return jsonify(user_bank_accounts), 200

@api.route('add_bank_account', methods=['POST'])
@jwt_required()
def add_bank_account():
    req_Json = request.get_json()
    bank_account = Bank_account(req_Json["user_id"], req_Json["country"], req_Json["account_number"], req_Json["bank"], req_Json["account_holder"], req_Json["document_type"], req_Json["document_id"])
    db.session.add(bank_account)
    db.session.commit()
    return "bank account created", 201
    
@api.route('edit_bank_account/<int:bank_account_id>', methods=['PUT'])
@jwt_required()
def edit_bank_account(bank_account_id):
    req_Json = request.get_json()
    for i, bank_account in enumerate(bank_account_temp):
        if bank_account["id"] == bank_account_id:
            bank_account_temp[i] = req_Json
            bank_account_temp[i]["id"] = bank_account_id
            return jsonify(bank_account_temp), 200
    return "bank account not found", 404

@api.route('delete_bank_account/<int:bank_account_id>', methods=['DELETE'])
@jwt_required()
def delete_bank_account(bank_account_id):
    for i, bank_account in enumerate(bank_account_temp):
        if bank_account["id"] == bank_account_id:
            del bank_account_temp[i]
            return jsonify(bank_account_temp), 200
    return "bank account not found", 404



# -----------------------Transactions endpoints-------------------------------
@api.route('/get_all_transactions/', methods=['GET'])
@jwt_required()
def get_all_transaction():
    transactions = Transaction.query.all()
    if (transactions == []):
        return "transactions not found", 404
    else:
        transactions = list(map(lambda x: x.serialize(),transactions))
        return jsonify(transactions), 200

@api.route('/get_transaction/<int:transaction_id>', methods=['GET'])
@jwt_required()
def get_transaction(transaction_id):
    transactions = list(map(lambda x: x.serialize(),Transaction.query.all()))
    for transaction in transactions:
        if transaction["id"] == transaction_id:
            return jsonify(transaction), 200
        else:
            return "transaction not found", 404

@api.route('/get_transaction_by_user_id/<int:user_id>', methods=['GET'])
@jwt_required()
def get_transaction_by_user_id(user_id):
    all_transactions = list(map(lambda x: x.serialize(),Transaction.query.all()))
    user_transactions = []
    for transaction in all_transactions:
        if transaction["user_id"] == user_id:
            user_transactions.append(transaction)
    return jsonify(user_transactions), 200

@api.route('/add_transaction', methods=['POST'])
@jwt_required()
def add_transaction():
    req_Json = request.get_json()
    transaction = Transaction(req_Json["user_id"], req_Json["change_id"], req_Json["bank_account_id"], req_Json["transaction_amount"], req_Json["transfer_bank_id"])
    db.session.add(transaction)
    db.session.commit()
    return transaction.serialize(), 200

@api.route('edit_transaction/<int:transaction_id>', methods=['PUT'])
@jwt_required()
def edit_transaction(transaction_id):
    transaction = Transaction.query.get(transaction_id)
    if transaction is None:
        return "transaction not found", 404    
    req_Json = request.get_json()
    if req_Json["status"] is not None:
        transaction.status = req_Json["status"]
        db.session.add(transaction)
        db.session.commit()
    return "Status de la transacción cambiado a " + req_Json["status"], 200

@api.route('delete_transaction/<int:transaction_id>', methods=['DELETE'])
@jwt_required()
def delete_transaction(transaction_id):
    transaction = User.query.get(transaction_id)
    if transaction is None:
        return "transaction not found", 404
            
    db.session.delete(transaction)
    db.session.commit()
    return "transaction was deleted", 200



# -----------------------Token endpoints-------------------------------
@api.route('/token', methods=['POST'])
def create_token():
    users = list(map(lambda x: x.serializeLogin(),User.query.all()))
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    found_user=None
    for user in users:
        if user["email"] == email and check_password_hash(user["password"],password):
            found_user=user
    if found_user is  None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=found_user["id"])
    return jsonify({ "token": access_token, "user": found_user })