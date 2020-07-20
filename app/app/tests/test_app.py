from app.tests import client

def test_app_index(client):
    response = client.get('/')
    assert b'Hello, app!' in response.data
