import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lado_Fuerza} from '../app/models/Lado_Fuerza';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuerzaService {
  API_URI='http://localhost:59011/api'
  constructor(private http: HttpClient) { }

  getJedi(){
    return this.http.get(`${this.API_URI}/values`);
  }

  getJedis(id: string){
    return this.http.get(`${this.API_URI}/values/${id}`);
  }

  deleteJedi(id : number){
    return this.http.delete(`${this.API_URI}/values?id=${id}`)
  }

  saveJedi(jedi: Lado_Fuerza){
    return this.http.post(`${this.API_URI}/values`, jedi);
  }

  updateJedi(updatejedi: Lado_Fuerza): Observable<any>{
    return this.http.put(`${this.API_URI}/values`, updatejedi);
  }
}
