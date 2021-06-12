import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Iniciar Servicios
import { CargarScriptsService } from "./cargar-scripts.service";
//Fin Servicios

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path: 'navbar', component: NavbarComponent, pathMatch: 'full'},
  { path: 'sidebar', component: SidebarComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    CargarScriptsService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
