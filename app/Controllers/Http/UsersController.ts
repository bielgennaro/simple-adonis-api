 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';



export default class UsersController {
  public async create({request}: HttpContextContract){
    const {username, name, email, password, age} = request.only(["name", "username", "email", "age", "password"]);

    const user = await User.create({
      username,
      name,
      email,
      password,
      age,
    });

    return user;
  }

  public async index(){
    const all = await User.all()
    return all;
  }
}
