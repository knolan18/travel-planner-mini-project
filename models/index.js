// const { Model, DataTypes } = require('sequelize');
const Traveller =require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasMany(Trip);
Location.hasMany(Trip);
// Traveller.hasMany(Location);

Trip.belongsTo(Location), {
  foreignKey: 'location_id',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports= {
  Location:Location,
  Trip:Trip,
  Traveller:Traveller,
}