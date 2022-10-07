const Sequelize = require("sequelize");

const Dbconnection = new Sequelize("project","root","",{
    dialect: "mysql"
})

module.exports = Dbconnection;