const MovimentationTable = require("../../models/Movimentations")
class MovimentationsContainer{
    static async CreateMovimentationContainer(req,res){
        const {typeMovimentation,initialDate,finalDate,id_transport} = req.body;
        try{
            await MovimentationTable.create({
                TypeMovimentation: typeMovimentation,
                InitialDate: initialDate,
                FinalDate: finalDate,
                TransporteId: id_transport
            })
            res.send("Movimentação adicionada!")
        }
        catch(ex){
            res.send("Não foi possível adicionar a movimentação");
        }
       
    }
}
module.exports = MovimentationsContainer;