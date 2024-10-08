const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Project = require('./project.model');

const Reference = sequelize.define('references', 
{
  id: 
  {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  project_id: 
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: 
    {
      model: Project,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  citation_format: 
  {
    type: DataTypes.ENUM('APA', 'MLA', 'IEEE', 'Chicago', 'Harvard', 'Vancouver', 'ISO690', 'CSE'),
    allowNull: false,
  },
  source_type: 
  {
    type: DataTypes.ENUM('book', 'journal', 'website', 'pdf', 'thesis', 'conference', 'video', 'interview'),
    allowNull: false,
  },
  author: 
  {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  title: 
  {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  publication_year: 
  {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  publisher: 
  {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  url: 
  {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  citation_text: 
  {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, 
{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Reference;