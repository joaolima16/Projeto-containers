const express= require("express");
const app = express();
const router = require("../routes/Routes")
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(router);
app.listen(3500,()=>{
    console.log("Servidor em operação")
})