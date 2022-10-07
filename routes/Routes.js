const  {Router} = require("express");
const Controller = require("../controllers/Controller")
const UserController = require("../controllers/UserController")
const ContainerController = require("../controllers/ContainerController");
const TransportController = require("../controllers/TransportController");
const MovimentationsController = require("../controllers/MovimentationsController");
const routes = Router();

routes.get("/Migration",Controller.CreateDatabase);
// Usuário
routes.post("/InsertUser",UserController.CadasterUser);
routes.get("/Login",UserController.Login);
// Container
routes.get("/Container",ContainerController.GetContainer);
routes.post("/InsertContainer/:id",ContainerController.InsertContainer);
routes.put("/UpdateContainer",ContainerController.UpdateContainer);
routes.delete("/DeleteContainer",ContainerController.DeleteContainer);
//  Transportes
routes.post("/InsertTransport",TransportController.CreateContainerTransation);
routes.put("/UpdateTransport",TransportController.UpdateContainerTransation);

// Movimentações
routes.post("/InsertMovimentation",MovimentationsController.CreateMovimentationContainer);
routes.get("/Relatory/:id",MovimentationsController.RelatoryContainers);
module.exports = routes;