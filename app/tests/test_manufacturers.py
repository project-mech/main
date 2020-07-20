from tests import client
from tests.utils.gql import gql_get
from tests.utils.graphql import manufacturers
from tests.utils.response import json_response

def test_manufacturers(client):
    response = gql_get(client,
                       manufacturers)
    assert json_response(response) is not None
