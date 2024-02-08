"""empty message

Revision ID: aff7dbc81708
Revises: 3d341b407d0d
Create Date: 2024-01-28 16:07:45.279461

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aff7dbc81708'
down_revision = '3d341b407d0d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('testimony', schema=None) as batch_op:
        batch_op.alter_column('testimony_text',
               existing_type=sa.VARCHAR(length=400),
               nullable=False)
        batch_op.drop_constraint('testimony_animal_id_key', type_='unique')
        batch_op.drop_constraint('testimony_animal_id_fkey', type_='foreignkey')
        batch_op.drop_column('animal_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('testimony', schema=None) as batch_op:
        batch_op.add_column(sa.Column('animal_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.create_foreign_key('testimony_animal_id_fkey', 'animals', ['animal_id'], ['id'])
        batch_op.create_unique_constraint('testimony_animal_id_key', ['animal_id'])
        batch_op.alter_column('testimony_text',
               existing_type=sa.VARCHAR(length=400),
               nullable=True)

    # ### end Alembic commands ###
