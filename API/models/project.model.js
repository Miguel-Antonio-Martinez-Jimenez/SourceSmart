const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user.model');

const Project = sequelize.define('projects', 
{
  id: 
  {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: 
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: 
    {
      model: User,
      key: 'id',
    },
      onDelete: 'CASCADE',
  },
  name: 
  {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: 
  {
    type: DataTypes.STRING(MAX),
    allowNull: false,
  }
}, 
{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Project;