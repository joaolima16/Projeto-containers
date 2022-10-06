const ContainerTable = require("../../models/Container")
const Controller = require("../Controller");
const TransportTable = require("../../models/Transport")
class ContainerController{
    static async GetContainer(req,res){
        Controller.RelationshipTransportContainer();
            const DataContainer = await ContainerTable.findAll({include:TransportTable});
            res.json(DataContainer);
    }
    static async InsertContainer(req,res){
        const{Number,type} = req.body
        console.log(req.body);
        
        try{
            Controller.RelationshipTransportContainer();
            Controller.RelationshipUserTransport();
            const new_container = await ContainerTable.create({
                Container: Number,
                Type:type 
             })
         res.send("Container adicionado")
        }

        catch(ex){
            res.send("Não foi possível adicionar o container")
            console.log(ex.message)
        }
    }
    static async UpdateContainer(req,res){
        const {number_container,new_number,new_type} = req.body;
        try{
            const new_container = await ContainerTable.update({Container:new_number,type:new_type},{where:{
                Container:number_container,
            },limit:1})
            res.send("Container atualizado")
        }
        catch(e){
            res.send("Ocorreu um erro ao atualizar o container")
        }
        }
    static async DeleteContainer(req,res){

        try{ 
            const {number_container} = req.body;
           
            await ContainerTable.destroy({where:{Container: number_container},limit:1})
            res.send("Container Deletado")
        }
        catch(ex){
            res.send("Container não deletado")
            console.log(ex.message);
        }
    }
        
}
module.exports = ContainerController;
