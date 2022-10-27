import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modales/login/login.component';
import { ContactoComponent } from './modales/contacto/contacto.component';
import { BannerComponent } from './banner/banner.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FooterComponent } from './footer/footer.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { IndexComponent } from './index/index.component';
import { RedesComponent } from './redes/redes.component';
import { BottonLoginComponent } from './botton-login/botton-login.component';
import { BottonContactoComponent } from './botton-contacto/botton-contacto.component';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';
import { BottonLogoutComponent } from './botton-logout/botton-logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './modales/logout/logout.component';
import { BottonEdicionredesComponent } from './botton-edicionredes/botton-edicionredes.component';
import { AgregarredsocialComponent } from './modales/agregarredsocial/agregarredsocial.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { PerfildashboardComponent } from './perfildashboard/perfildashboard.component';
import { ExperienciadashboardComponent } from './experienciadashboard/experienciadashboard.component';
import { AgregarexperiencialabComponent } from './modales/agregarexperiencialab/agregarexperiencialab.component';
import { BottonEdicionexperiencialabComponent } from './botton-edicionexperiencialab/botton-edicionexperiencialab.component';
import { EducaciondashboardComponent } from './educaciondashboard/educaciondashboard.component';
import { AgregareducacionComponent } from './modales/agregareducacion/agregareducacion.component';
import { BottonEdicioneducacionComponent } from './botton-edicioneducacion/botton-edicioneducacion.component';
import { HabilidadesdashboardComponent } from './habilidadesdashboard/habilidadesdashboard.component';
import { AgregarhabilidadComponent } from './modales/agregarhabilidad/agregarhabilidad.component';
import { BottonEdicionhabilidadComponent } from './botton-edicionhabilidad/botton-edicionhabilidad.component';
import { ProyectosdashboardComponent } from './proyectosdashboard/proyectosdashboard.component';
import { AgregarproyectoComponent } from './modales/agregarproyecto/agregarproyecto.component';
import { BottonEdicionproyectoComponent } from './botton-edicionproyecto/botton-edicionproyecto.component';
import { CurriculumdashboardComponent } from './curriculumdashboard/curriculumdashboard.component';
import { AgregarcvComponent } from './modales/agregarcv/agregarcv.component';
import { BottonEdicioncvComponent } from './botton-edicioncv/botton-edicioncv.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ContactoComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    CurriculumComponent,
    FooterComponent,
    Pagina404Component,
    IndexComponent,
    RedesComponent,
    BottonLoginComponent,
    BottonContactoComponent,
    NavbarloginComponent,
    BottonLogoutComponent,
    DashboardComponent,
    LogoutComponent,
    BottonEdicionredesComponent,
    AgregarredsocialComponent,
    BannerdashboardComponent,
    PerfildashboardComponent,
    ExperienciadashboardComponent,
    AgregarexperiencialabComponent,
    BottonEdicionexperiencialabComponent,
    EducaciondashboardComponent,
    AgregareducacionComponent,
    BottonEdicioneducacionComponent,
    HabilidadesdashboardComponent,
    AgregarhabilidadComponent,
    BottonEdicionhabilidadComponent,
    ProyectosdashboardComponent,
    AgregarproyectoComponent,
    BottonEdicionproyectoComponent,
    CurriculumdashboardComponent,
    AgregarcvComponent,
    BottonEdicioncvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
