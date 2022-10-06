const Sequelize = require('sequelize');
const Db = require("../config/Db.config");

const UserTable = Db.define("Users",{
    Id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    User:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Password:{
        type: Sequelize.STRING,
        allowNull:false
    }
})
module.exports = UserTable;
