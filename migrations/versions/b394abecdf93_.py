"""empty message

<<<<<<<< HEAD:migrations/versions/c4f75387ddeb_.py
Revision ID: c4f75387ddeb
Revises: 
Create Date: 2023-01-27 01:22:59.223873
========
Revision ID: b394abecdf93
Revises: 
Create Date: 2023-01-27 02:09:02.834167
>>>>>>>> ggarrido-fetch:migrations/versions/b394abecdf93_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/c4f75387ddeb_.py
revision = 'c4f75387ddeb'
========
revision = 'b394abecdf93'
>>>>>>>> ggarrido-fetch:migrations/versions/b394abecdf93_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('changes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('origin_exchange', sa.String(length=30), nullable=False),
    sa.Column('destination_exchange', sa.String(length=30), nullable=False),
    sa.Column('exchange_rate', sa.Float(precision=30), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rut', sa.String(length=11), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=10000), nullable=False),
    sa.Column('validate_status', sa.Boolean(), nullable=False),
    sa.Column('first_name', sa.String(length=30), nullable=False),
    sa.Column('last_name', sa.String(length=30), nullable=False),
    sa.Column('phone', sa.String(length=13), nullable=False),
    sa.Column('birthdate', sa.String(length=50), nullable=False),
    sa.Column('nationality', sa.String(length=30), nullable=False),
    sa.Column('ocupation', sa.String(length=30), nullable=False),
    sa.Column('monthly_income', sa.Integer(), nullable=False),
    sa.Column('particular_address', sa.String(length=120), nullable=False),
    sa.Column('department', sa.String(length=120), nullable=False),
    sa.Column('admin', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('bank_accounts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('country', sa.String(length=40), nullable=False),
    sa.Column('account_number', sa.String(length=40), nullable=False),
    sa.Column('bank', sa.String(length=40), nullable=False),
    sa.Column('account_holder', sa.String(length=100), nullable=False),
    sa.Column('document_type', sa.String(length=40), nullable=False),
    sa.Column('document_id', sa.String(length=100), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('document_id')
    )
    op.create_table('transactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=11), nullable=False),
    sa.Column('change_id', sa.Integer(), nullable=False),
    sa.Column('bank_account_id', sa.Integer(), nullable=False),
    sa.Column('transaction_amount', sa.Float(precision=50), nullable=False),
    sa.Column('transfer_bank_id', sa.String(length=50), nullable=True),
    sa.Column('date_time', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['bank_account_id'], ['bank_accounts.id'], ),
    sa.ForeignKeyConstraint(['change_id'], ['changes.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('transactions')
    op.drop_table('bank_accounts')
    op.drop_table('users')
    op.drop_table('changes')
    # ### end Alembic commands ###
