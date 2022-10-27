import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo: '/', pathMatch:'full'},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
