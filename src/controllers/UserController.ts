import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

/**
 * Retorna todos os ueuários.
 * @param request 
 * @param response 
 */
export const getUsers = async (request: Request, response: Response) => {
  const users = await getRepository(User).find();
  return response.json(users);
}

/**
 * Busca um usuário.
 * @param request 
 * @param response 
 */
export const findUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).findOne(id);
  console.log(user); // testar pra quando não tem retorno de usuário.
  if (!user) {
    return response.status(404).json({ message: 'User not found.' })
  } else {
    return response.json(user);
  }
}

/**
 * Cria um novo usuário.
 * @param request 
 * @param response 
 */
export const saveUser = async (request: Request, response: Response) => {
  const user = await getRepository(User).save(request.body);
  return response.json(user);
}

/**
 * Atualiza um usuário.
 * @param request 
 * @param response 
 */
export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).update(id, request.body);
  if (user.affected === 1) {
    const userUpdated = await getRepository(User).findOne(id);
    response.json(userUpdated);
  } else {
    return response.status(404).json({ message: 'User not found.' })
  }
}

/**
 * Remove um usuário.
 * @param request 
 * @param response 
 */
export const removeUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).delete(id);

  if (user.affected === 1) {
    console.log('ok');
  }
  return response.json({ menssage: 'ok' });
}