import * as ordersService from "../services/ordersService.js"

async function post(req, res) {
  const result = await ordersService.create(req.body);
  return res.status(201).send(result);
}

async function findAll(req, res){
  const result = await ordersService.findAll();
  return res.status(200).send(result);
}

async function find(req, res){
  const searchSettings = req.query;

  const result = await ordersService.find(searchSettings);
  return res.status(200).send(result);
}

export { post, findAll, find };