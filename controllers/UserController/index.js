const { reset } = require("nodemon");
const UserTable = require("../../models/User")

class User{
    static async CadasterUser(req,res){
        const {user,password,name} = req.body;
        try{
           const newUser = await UserTable.create({
             Name: name,
             User:user,
             Password:password
           })
        res.send("Usuário adicionado com sucesso!")
        }
        catch(e){
            res.send("Usuário não inserido")
            console.log(e.message)
        }
    }
    static async Login(req,res){
        const {user,password} = req.body;
        const UserQuery = await UserTable.findAll({
            where:{
                User: user,
                Password: password
            }
        })

        if(UserQuery.length >0){
            res.send("Usuário logado")
        }
        else{
            res.send("Login incorreto")
        }
    }
}
module.exports = User;