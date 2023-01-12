from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rut = db.Column(db.String(11), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    validate_status = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(30), unique=False, nullable=False)
    phone = db.Column(db.String(13), unique=True, nullable=False)
    birthdate = db.Column(db.String(50), unique=False, nullable=False)
    nationality = db.Column(db.String(30), unique=False, nullable=False)
    ocupation = db.Column(db.String(30), unique=False, nullable=False)
    monthly_income = db.Column(db.Integer, unique=False, nullable=False)
    particular_address = db.Column(db.String(120), unique=False, nullable=False)
    department = db.Column(db.String(120), unique=False, nullable=False)

class Change(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    origin_exchange = db.Column(db.String(30), unique=False, nullable=False)
    destination_exchange = db.Column(db.String(30), unique=False, nullable=False)
    exchange_rate = db.Column(db.String(30), unique=False, nullable=False)

class Bank_account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    country = db.Column(db.String(40), unique=False, nullable=False)
    account_number = db.Column(db.String(40), unique=False, nullable=False)
    bank = db.Column(db.String(40), unique=False, nullable=False)
    account_holder = db.Column(db.String(100), unique=False, nullable=False)
    document_type = db.Column(db.String(40), unique=False, nullable=False)
    document_id = db.Column(db.String(100), unique=True, nullable=False)

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.String(11), unique=False, nullable=False)
    change_id = db.Column(db.Integer, db.ForeignKey('change.id'), nullable=False)
    bank_account_id = db.Column(db.Integer, db.ForeignKey('bank_account.id'), nullable=False)
    date = db.Column(db.String(50), unique=False, nullable=False)
    time = db.Column(db.String(50), unique=False, nullable=False)
    transaction_amount = db.Column(db.String(50), unique=False, nullable=False)
    transfer_bank_id = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "rut": self.rut,
            "email": self.email,
            "validate_status": self.validate_status,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "birthdate": self.birthdate,
            "nationality": self.nationality,
            "ocupation": self.ocupation,
            "monthly_income": self.monthly_income,
            "particular_address": self.particular_address,
            "department": self.department,



            # do not serialize the password, its a security breach
        }
