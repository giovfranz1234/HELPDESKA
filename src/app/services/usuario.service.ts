import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  })
export class UsuarioService {
  url='http://localhost:3000/usuario';

  constructor(private http:HttpClient){ }

    getUsuarios(): Observable<any>{
      return this.http.get(this.url);
  }
  eliminarUsuario(num_sec: string): Observable<any> {
    return this.http.delete(this.url + num_sec);
  }
}
