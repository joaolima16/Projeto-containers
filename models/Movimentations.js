const Sequelize = require("sequelize")
const Db = require("../config/Db.config")

const MovimentationsTable = Db.define("Movimentations",{
    Id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
    },
    TypeMovimentation:{
        type: Sequelize.ENUM("embarque","descarga","gate-in","gate-out","reposicionamento","pesagem","scanner"),
        allowNull:false
    },
    InitialDate:{
        type: Sequelize.DATE,
        allowNull:false
    },
    FinalDate:{
        type: Sequelize.DATE,
        allowNull:false
    }
})
module.exports = MovimentationsTable;