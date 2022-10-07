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
        const{number,type} = req.body
        const id_user = req.params.id;
        
        try{
            Controller.RelationshipTransportContainer();
            Controller.RelationshipUserTransport();
            Controller.RelationshipContainerUser();
            const new_container = await ContainerTable.create({
                Container: number,
                Type:type,
                UserId: id_user
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
