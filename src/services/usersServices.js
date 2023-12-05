// import * as usersRespository from "../repositories/usersRepository.js";

// async function create(newUser) {
//   const alreadyExists = await usersRespository.findByName(newUser)
//   if(alreadyExists){
//     throw { type: "conflict", message: "Usuário já existente" };
//   }else{
//     const result = await usersRespository.create(newUser);
//     const statusMessage = {
//       from: newUser.name,
//       to: "Todos",
//       text: "Entrou na sala...",
//       type: "status"
//     }
//     return result;
//   }
// }

// export { create };