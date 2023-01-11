from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    rut = db.Column(db.String(11), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    validate_status = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String(30), unique=True, nullable=False)
    last_name = db.Column(db.String(30), unique=True, nullable=False)
    phone = db.Column(db.String(13), unique=True, nullable=False)
    birthdate = db.Column(db.String(13), unique=True, nullable=False)
    nationality = db.Column(db.String(30), unique=True, nullable=False)
    ocupation = db.Column(db.String(30), unique=True, nullable=False)
    monthly_income = db.Column(db.Integer, unique=True, nullable=False)
    particular_address = db.Column(db.String(120), unique=True, nullable=False)
    department = db.Column(db.String(120), unique=True, nullable=False)

    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
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
