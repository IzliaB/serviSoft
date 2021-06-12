import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { LoginComponent } from "../login/login.component";  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url :string;  
  token : string;  
  header : any;  
  constructor( private http : HttpClient ) { 

    this.Url = 'https://servisoft.azurewebsites.net/api/Usuario/';  

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  

    this.token = '';
   }
   Login(model : any){  
    debugger;  
     var a =this.Url+'getUsuarios';  
   return this.http.post<any>(this.Url+'getUsuarios',model,{ headers: this.header});  
  }  
  CreateUser(register:LoginComponent)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<LoginComponent[]>(this.Url + '/postUsuario/', register, httpOptions)  
   }  
}
