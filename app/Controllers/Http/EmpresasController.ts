import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa';

export default class EmpresasController {
  public async create({request}: HttpContextContract){
    const {name, cnpj} = request.only(["name", "cnpj"]);

    const empresa = await Empresa.create({
      cnpj,
      name,
    });
    return empresa;

  }
  public async index(){
      const all = await Empresa.all()
      return all
  }
}
