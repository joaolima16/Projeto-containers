const ContainerTable = require("../../models/Container");
const MovimentationTable = require("../../models/Movimentations")

const TransportTable = require("../../models/Transport");
const Controller = require("../Controller");
class MovimentationsContainer{
    static async CreateMovimentationContainer(req,res){

        const {typeMovimentation,initialDate,
              finalDate,id_transport,id_user} = req.body;
              
        try{
            await Controller.RelationshipUserMovimentation();
            await Controller.RelationshipTransportMovimentation();
            await MovimentationTable.create({
                TypeMovimentation: typeMovimentation,
                InitialDate: initialDate,
                FinalDate: finalDate,
                TransportId: id_transport,
                UserId: id_user
            })
            res.send("Movimentação adicionada!")
        }
        catch(ex){
            res.send("Não foi possível adicionar a movimentação");
            console.log(ex.message)
        }
       
    }
    static async RelatoryContainers(req,res){
        const id_user = req.params.id;
        await Controller.RelationshipTransportMovimentation();
        try{
        const Relatory = await MovimentationTable.findAll({where:{UserId:id_user},include:TransportTable})
        res.json(Relatory);

        }
        catch(ex){
            console.log(ex.message)
        }
    }
}
module.exports = MovimentationsContainer;