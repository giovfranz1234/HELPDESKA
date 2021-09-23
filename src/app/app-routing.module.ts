import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {ListaUsuarioComponent} from './components/lista-usuario/lista-usuario.component';
const routes: Routes = [
  {path: '', component: ListaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
