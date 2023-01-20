from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
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
    bank_accoutns = db.relationship("Bank_account", backref="user")
    transactions = db.relationship("Transaction", backref="user")

    def __init__(self, rut, email, password, validate_status, first_name, last_name, phone, birthdate, nationality, ocupation, monthly_income, particular_address, department):
        self.rut = rut
        self.email = email
        self.password = password
        self.validate_status = validate_status
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.birthdate = birthdate
        self.nationality = nationality
        self.ocupation = ocupation
        self.monthly_income = monthly_income
        self.particular_address = particular_address
        self.department = department

    def __repr__(self):
        return f"{self.rut}:{self.email}:{self.password}:{self.first_name}:{self.last_name}:{self.phone}:{self.birthdate}:{self.nationality}:{self.ocupation}:{self.particular_address}:{self.department}"

    def serialize(self):
        return {
            "id": self.id,
            "rut": self.rut,
            "email": self.email,
            "password": self.password,
            "validate_status": self.validate_status,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "birthdate": self.birthdate,
            "nationality": self.nationality,
            "ocupation": self.ocupation,
            "monthly_income": self.monthly_income,
            "particular_address": self.particular_address,
            "department": self.department
        }

class Change(db.Model):
    __tablename__ = 'changes'
    id = db.Column(db.Integer, primary_key=True)
    origin_exchange = db.Column(db.String(30), unique=False, nullable=False)
    destination_exchange = db.Column(db.String(30), unique=False, nullable=False)
    exchange_rate = db.Column(db.Float(30), unique=False, nullable=False)
    transactions = db.relationship("Transaction", backref="change")

    def __init__(self,origin_exchange,destination_exchange,exchange_rate):
        self.origin_exchange = origin_exchange
        self.destination_exchange = destination_exchange
        self.exchange_rate = exchange_rate

    def __repr__(self):
        return f"{self.origin_exchange}:{self.destination_exchange}:{self.exchange_rate}"

    def serialize(self):
        return{
            "id": self.id,
            "origin_exchange": self.origin_exchange,
            "destination_exchange": self.destination_exchange,
            "exchange_rate": self.exchange_rate,
        }

class Bank_account(db.Model):
    __tablename__  = 'bank_accounts'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    country = db.Column(db.String(40), unique=False, nullable=False)
    account_number = db.Column(db.String(40), unique=False, nullable=False)
    bank = db.Column(db.String(40), unique=False, nullable=False)
    account_holder = db.Column(db.String(100), unique=False, nullable=False)
    document_type = db.Column(db.String(40), unique=False, nullable=False)
    document_id = db.Column(db.String(100), unique=True, nullable=False)
    transactions = db.relationship("Transaction", backref="bank_account")

    def __init__ (self,user_id,country,account_number,bank,account_holder,document_type,document_id):
        self.user_id = user_id
        self.country = country
        self.account_number = account_number
        self.bank = bank
        self.account_holder = account_holder
        self.document_type = document_type
        self.document_id = document_id

    def __repr__ (self):
        return f"{self.user_id}:{self.country}:{self.account_number}:{self.bank}:{self.account_holder}:{self.document_type}:{self.document_id}"

    def serialize(self):
        return{
            "id": self.id,
            "user_id":self.user_id,
            "country": self.country,
            "account_number": self.account_number,
            "bank": self.bank,
            "account_holder": self.account_holder,
            "document_type": self.document_type,
            "document_id": self.document_id,
        }

class Transaction(db.Model):
    __tablename__ = 'transactions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    status = db.Column(db.String(11), unique=False, nullable=False)
    change_id = db.Column(db.Integer, db.ForeignKey('changes.id'), nullable=False)
    bank_account_id = db.Column(db.Integer, db.ForeignKey('bank_accounts.id'), nullable=False)
    date = db.Column(db.String(50), unique=False, nullable=False)
    time = db.Column(db.String(50), unique=False, nullable=False)
    transaction_amount = db.Column(db.Float(50), unique=False, nullable=False)
    transfer_bank_id = db.Column(db.String(50), unique=True, nullable=False)

    def __init__(self, user_id, status, change_id, bank_account_id, date, time, transaction_amount, transfer_bank_id):
        self.user_id = user_id
        self.status = status
        self.change_id = change_id
        self.bank_account_id = bank_account_id
        self.date = date
        self.time = time
        self.transaction_amount = transaction_amount
        self.transfer_bank_id = transfer_bank_id

    def __repr__(self):
        return f"{self.user_id}:{self.status}:{self.change_id}:{self.bank_account_id}:{self.date}:{self.time}:{self.transaction_amount}:{self.transfer_bank_id}"
        
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "status": self.status,
            "change_id":self.change_id,
            "bank_account_id":self.bank_account_id,
            "date":self.date,
            "time":self.time,
            "transaction_amount":self.transaction_amount,
            "transfer_bank_id":self.transfer_bank_id
        }