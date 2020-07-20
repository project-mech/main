import graphene
from app.models.manufacturer import Manufacturer
from graphene_sqlalchemy import SQLAlchemyObjectType

class ManufacturerObject(SQLAlchemyObjectType):

    class Meta:
        model = Manufacturer
        only_fields = ('id', 'manufacturer')
        description = "Car manufacturers."

    id = graphene.String(description = "The ID of the manufacturer.")
    manufacturer = graphene.String(description = "The canonical name of the manufacturer.")

class ManufacturersQuery:
    manufacturers = graphene.List(ManufacturerObject, description="A list of all car manufacturers.")

    def resolve_manufacturers(self, info):
        query = ManufacturerObject.get_query(info)
        return query.all()
