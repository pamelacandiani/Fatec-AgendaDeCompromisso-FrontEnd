import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendasComponent } from './agendas/agendas.component';
import { AgendasFormsComponent } from './agendas-forms/agendas-forms.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'agendas', component: AgendasComponent},
  {path: 'agendas-forms', component: AgendasFormsComponent},
  {path: 'agendas/:id', component: AgendasFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
