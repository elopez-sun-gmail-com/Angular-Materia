import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../modelo/estado';
import { Usuario } from '../modelo/usuario';
import { Municipio } from '../modelo/municipio';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  usuarioService = new Usuario();

  constructor(private http: HttpClient) { }


  cargaEstado(): Observable<Estado[]>  {
   return this.http.get<Estado[]>('/assets/data/estado.json');
  }

  cargaMunicipio(): Observable<Municipio[]>  {
    return this.http.get<Municipio[]>('/assets/data/municipio.json');
   }
}
