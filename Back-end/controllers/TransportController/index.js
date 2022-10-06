const TransportTable = require("../../models/Transport");
const { RelationshipUserTransport } = require("../Controller");
class TransportContainer{
    static async CreateContainerTransation(req,res){
        const {id_user,status,category,id_container} = req.body;
        try{
            await TransportTable.create({
                Status: status,
                Category: category,
                userId: id_user,
                ContainerId: id_container
            })
            res.send("Transação do container adicionada")
        }
        catch(ex){
            res.send("Não foi possível adicionar a transação do container")
            console.log(ex.message)
        }   
    }
    static async UpdateContainerTransation(req,res){
        const {id_container,status,category} = req.body;
        try{
            await TransportTable.update(
            {Status:status,Category:category},{where:{ContainerId:id_container},limit:1}
            )
            res.send("Transação Atualizada")
        }
        catch(ex){
            res.send("Ocorreu um erro ao atualizar a transação")
            console.log(ex.message)
        }
    }
}

module.exports = TransportContainer;