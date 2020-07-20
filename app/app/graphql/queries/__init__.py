import graphene
from .manufacturers import ManufacturersQuery

class Queries(graphene.ObjectType,
              ManufacturersQuery):
    class Meta:
        description = "All available queries in the API."
