import graphene
from app.models.manufacturer import Manufacturer
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField

class ManufacturerObject(SQLAlchemyObjectType):

    class Meta:
        model = Manufacturer
        only_fields = ('id', 'manufacturer')
        description = "Car manufacturers."
        interfaces = (graphene.relay.Node, )

    manufacturer = graphene.String(description = "The canonical name of the manufacturer.")

class ManufacturersQuery:
    manufacturers = SQLAlchemyConnectionField(ManufacturerObject.connection,
                                              search = graphene.String())

    def resolve_manufacturers(self, info, search=None, *args, **kwargs):
        query = ManufacturerObject.get_query(info)
        if search:
            search = "%{}%".format(search)
            query = query.filter(Manufacturer._manufacturer.like(Manufacturer.searchable(search)))
        return query.all()
