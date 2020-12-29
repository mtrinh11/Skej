'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    importance: DataTypes.STRING,
    private: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};