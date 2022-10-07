const ContainerTable = require("../models/Container")
const MovimentationTable = require("../models/Movimentations")
const UserTable = require("../models/User")
const TransportTable = require("../models/Transport")
class Controller{

    static async CreateDatabase(req,res){
        try{
            Controller.RelationshipContainerUser();
            Controller.RelationshipUserTransport();
            Controller.RelationshipTransportMovimentation();
            Controller.RelationshipTransportContainer();
            Controller.RelationshipUserMovimentation();
            UserTable.sync({force:true});
             await ContainerTable.sync({force:true});
             TransportTable.sync({force:true});
             MovimentationTable.sync({force:true});
            
         
            res.send("Sucesso ao criar as tabelas")

        }
        catch(ex){
            res.send("Não foi possível criar as tabelas")
            console.log(ex.message)
        }
        
    }
    static async RelationshipContainerUser(){
        await UserTable.hasMany(ContainerTable,{
            constraint:true,
            allowNull:false
        })
        await ContainerTable.belongsTo(UserTable,{
            allowNull:false
        })

    }
    static async RelationshipUserTransport(){
         await UserTable.hasMany(TransportTable,{
            constraint:true,
            allowNull:false
        })
         await TransportTable.belongsTo(UserTable,{
           allowNull:false
         })
    }
    static  RelationshipTransportContainer(){
         ContainerTable.hasMany(TransportTable,{
         constraint:true,
         allowNull:false
        })

        TransportTable.belongsTo(ContainerTable,{
            allowNull:false
        })
    }
    static RelationshipTransportMovimentation(){
        TransportTable.hasMany(MovimentationTable,{
            constraint:true,
            allowNull:false
        })
        MovimentationTable.belongsTo(TransportTable,{
            allowNull:false
        })
    }
    static RelationshipUserMovimentation(){
        UserTable.hasMany(MovimentationTable,{
            constraint:true,
            allowNull:false
        })
        MovimentationTable.belongsTo(UserTable,{
            allowNull:false
        })
    }

}

module.exports = Controller;