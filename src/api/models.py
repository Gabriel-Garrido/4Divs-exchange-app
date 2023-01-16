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

    def __init__(self, rut, email, password, first_name, last_name, phone, birthdate, nationality, ocupation, particular_address, department):
        self.rut = rut
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.birthdate = birthdate
        self.nationality = nationality
        self.ocupation = ocupation
        self.particular_address = particular_address
        self.department = department

    def __repr__(self):
        return f"{self.rut}:{self.email}:{self.password}:{self.first_name}:{self.last_name}:{self.phone}:{self.birthdate}:{self.nationality}:{self.ocupation}:{self.particular_address}:{self.department}"

class Change(db.Model):
    __tablename__ = 'changes'
    id = db.Column(db.Integer, primary_key=True)
    origin_exchange = db.Column(db.String(30), unique=False, nullable=False)
    destination_exchange = db.Column(db.String(30), unique=False, nullable=False)
    exchange_rate = db.Column(db.Float(30), unique=False, nullable=False)
    transactions = db.relationship("Transaction", backref="change")

    def __repr__(self):
        return "<Change %r>" %self.origin_exchange
        return "<Change %r>" %self.destination_exchange

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

    def __repr__(self):
        return "<Bank_account %r>" %self.country
        return "<Bank_account %r>" %self.account_number
        return "<Bank_account %r>" %self.bank
        return "<Bank_account %r>" %self.account_holder
        return "<Bank_account %r>" %self.document_type
        return "<Bank_account %r>" %self.document_id

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

    def __repr__(self):
        return "<Transaction %r>" %self.status
        return "<Transaction %r>" %self.date
        return "<Transaction %r>" %self.time
        return "<Transaction %r>" %self.transfer_bank_id