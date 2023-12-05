// import * as usersService from "../services/usersServices.js";


async function hello(req, res){
  return res.status(201).send("Olá Projeto CRM!")
}

export { hello };