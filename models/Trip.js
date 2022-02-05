const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Traveller',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Location',
        key: 'id',
      },
    },
  {
  sequelize,
  },
);

module.exports=Trips;