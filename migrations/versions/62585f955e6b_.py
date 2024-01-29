"""empty message

Revision ID: 62585f955e6b
Revises: 1edb535d33e7
Create Date: 2024-01-25 17:22:09.163441

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '62585f955e6b'
down_revision = '1edb535d33e7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.alter_column('type',
               existing_type=postgresql.ENUM('CAT', 'DOG', name='type_enum'),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.alter_column('type',
               existing_type=postgresql.ENUM('CAT', 'DOG', name='type_enum'),
               nullable=True)

    # ### end Alembic commands ###