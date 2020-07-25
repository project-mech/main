from app import db
from sqlalchemy import func
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from .mixins import PrimaryKeyIdMixin, SearchableMixin

class Manufacturer(db.Model, PrimaryKeyIdMixin, SearchableMixin):
    __tablename__ = 'manufacturers'
    manufacturer = db.Column(db.String, index=True, unique=True, nullable=False)

    @hybrid_property
    def _manufacturer(self):
        return func.lower(func.trim(self.manufacturer))

    @validates('manufacturer')
    def validate_manufacturer(self, key, value):
        manufacturer = value.strip()
        exists = Manufacturer.query.filter(Manufacturer._manufacturer == Manufacturer.searchable(manufacturer)).first()
        if exists:
            raise AssertionError("Manufacturer already exists.")
        else:
            return manufacturer
