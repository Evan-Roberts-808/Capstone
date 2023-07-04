"""remove improper relationship

Revision ID: 0d76f37963c6
Revises: 333c6f20336b
Create Date: 2023-07-03 20:26:55.291982

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d76f37963c6'
down_revision = '333c6f20336b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status_id', sa.String(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_orders_status_id_order_statuses'), 'order_statuses', ['status_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_orders_status_id_order_statuses'), type_='foreignkey')
        batch_op.drop_column('status_id')

    # ### end Alembic commands ###
