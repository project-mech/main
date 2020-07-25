import pytest
from app import create_app, db
from load_data import load_data

# Session client
@pytest.fixture(scope='session')
def client():
    app = create_app('testing')
    with app.app_context() as ctx:
        ctx.push()
        db.create_all()
    client=app.test_client()
    return client
