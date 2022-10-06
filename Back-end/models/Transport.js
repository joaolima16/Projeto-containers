const Sequelize = require("sequelize")
const Db = require("../config/Db.config")
const TransportTable = Db.define("Transports",{
    Id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    Status:{
        type: Sequelize.ENUM("cheio","vazio"),
        allowNull:false
    },
    Category:{
      type: Sequelize.ENUM("importação","exportação"),
      allowNull:false
    }
})
module.exports = TransportTable;