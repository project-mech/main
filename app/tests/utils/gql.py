graphql_endpoint = "/api/"

def gql_get(client, func, headers=None, **kwargs):
    response = client.get(graphql_endpoint,
                          data = dict(query=func(**kwargs)),
                          headers=headers)
    return response

def gql_post(client, func, headers=None, **kwargs):
    response = client.post(graphql_endpoint,
                           data = dict(query=func(**kwargs)),
                           headers=headers)
    return response
