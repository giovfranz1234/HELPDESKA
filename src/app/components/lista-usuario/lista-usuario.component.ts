import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario }from 'src/app/modelos/usuarios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  listUsuarios: Usuario[] =[];
  constructor(private _usuarioService:UsuarioService,private toastr: ToastrService)  { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

   obtenerUsuarios(){
     this._usuarioService.getUsuarios().subscribe(data=>{
      this.listUsuarios = data;
      console.log(data);
     },error =>{
        console.log(error);

     })
   }
   eliminarUsuario(num_sec: any) {
    this._usuarioService.eliminarUsuario(num_sec).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }

}
