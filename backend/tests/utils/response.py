import json

def json_response(response):
    json_response = json.loads(response.data.decode("UTF-8"))
    return json_response
