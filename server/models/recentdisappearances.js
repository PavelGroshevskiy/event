'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecentDisappearances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecentDisappearances.init({
    who_missing: DataTypes.STRING,
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecentDisappearances',
  });
  return RecentDisappearances;
};