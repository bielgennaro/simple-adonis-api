import Route from '@ioc:Adonis/Core/Route'


Route.group(() =>{
  Route.post("/users", "UsersController.create")
  Route.get("/users", "UsersController.index")
}).prefix("/api")

Route.group(() => {
  Route.post("/empresas", "EmpresasController.create")
  Route.get("/empresas", "EmpresasController.index")
}).prefix("/api")
