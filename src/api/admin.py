  
import os
from flask_admin import Admin
from .models import db, User, Bank_account, Transaction, Change
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    #agrege los admin.add de transaction y change 19 ene
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Bank_account, db.session))
    admin.add_view(ModelView(Transaction, db.session))
    admin.add_view(ModelView(Change, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))