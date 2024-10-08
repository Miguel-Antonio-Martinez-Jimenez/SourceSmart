const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('users', 
{
    id: 
    {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: 
    {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    email: 
    {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password: 
    {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    refresh_token: 
    {
      type: DataTypes.TEXT,
      allowNull: true
    },
}, 
{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = User;