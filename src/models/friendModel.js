const { DataTypes } = require("sequelize");
const sequelize = require('./db');

const Friend = sequelize.define("Friend", {}, {
    
  timestamps: false
});

module.exports = Friend;
