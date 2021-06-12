import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CargarScriptsService } from "./../cargar-scripts.service";
import { UserService } from '../services/user.service';
import {Observable} from 'rxjs';    
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = false;    
  UserForm: any;    
  massage:string = '';   


  model : any={};    
  errorMessage:string = '';  

  constructor( private formbulider: FormBuilder, private loginService:UserService, private router:Router, private _CargarScripts: CargarScriptsService ) 
  {

  }

  ngOnInit(): void {
    this.UserForm = this.formbulider.group({    
      CodigoUsuario: ['', [Validators.required]],
      Contraseña: ['', [Validators.required]],    
      Correo: ['', [Validators.required]]  
    });    
    this._CargarScripts.Carga(["login/script"]);

    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    

  }
  onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }   
  Createemployee(register:LoginComponent)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  } 
  
  login(){    
    debugger;    
    this.loginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/dashboard']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    

}
