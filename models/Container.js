const Sequelize = require("sequelize");
const Db = require("../config/Db.config")

const ContainerTable = Db.define("Containers",{
    Id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
    },
    Container:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Type:{
        type: Sequelize.ENUM("20","40"),
        allowNull:false
    },
   
})
module.exports = ContainerTable;