import { Injectable } from '@angular/core';
import { PeopleEntity } from '../entities/people.entity';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  async save(people: PeopleEntity) {
    /* save skills */
    let data: PeopleEntity[] = await this.list();
    let exists = data.find(x=>x.uuid == people.uuid);
    if (exists) {
      exists.skills = people.skills;
      exists = Object.assign(exists,people)
    }
    else { data.push(people); }
    localStorage.setItem('peoples', JSON.stringify(data));
    console.log('data guardada',data)
  }

  async getById(token: string): Promise<any> {
    if(token == null){return undefined;}
    let data: PeopleEntity[] = await this.list();
    let exists = data.find(x => x.uuid == token);
    if (exists) {
      return exists;
    } else { return undefined; }
  }

  async list(): Promise<any[]> {
    let json = localStorage.getItem('peoples');
    if (json != null) {
      return JSON.parse(json);
    } else { return []; }
  }

  async register(people: PeopleEntity): Promise<any> {
    let data: PeopleEntity[] = await this.list();
    let exists = data.find(x => x.email == people.email);
    if (!exists) {
      data.push(people);
      localStorage.setItem('peoples', JSON.stringify(data));
      console.log(await this.list(), 'regiastrado')
      return { state: true, message: 'Registro exitoso' }
    } else {
      return { error: { message: 'El correo electrónico que ingresaste ya tiene un registro en el sistema. intente con otro' }, state: false }
    }
  }

  async login(email: string, pass: string) {
    let data: PeopleEntity[] = await this.list();
    let exists = data.find(x => x.email == email.trim() && x.password == pass.trim());
    if (exists) {
      this.setToken(exists.uuid)
      return { state: true, message: 'Login exitoso', people: exists }
    } else {
      return { state: false, message: 'Correo o contraseña inválida, intente de nuevo. Gracias' }
    }
  }

  async logout() {
    localStorage.setItem('token', '')
    location.reload();
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }
  getToken(): any {
    let token = localStorage.getItem('token');
    token = token ? token.trim() != '' ? token : null : null;
    return token;
  }
}
