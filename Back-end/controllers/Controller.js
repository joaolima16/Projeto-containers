const ContainerTable = require("../models/Container")
const MovimentationTable = require("../models/Movimentations")
const UserTable = require("../models/User")
const TransportTable = require("../models/Transport")
class Controller{

    static async CreateDatabase(req,res){
        try{
            Controller.RelationshipUserTransport();
            Controller.RelationshipTransportMovimentation();
            Controller.RelationshipTransportContainer();
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
}

module.exports = Controller;