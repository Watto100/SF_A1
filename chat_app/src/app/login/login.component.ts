import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, 
    private service: AuthService, private router: Router) {

  }

  userdata:any;

  loginform=this.builder.group({
    username: this.builder.control("", Validators.required),
    password: this.builder.control("", Validators.required),

  })

  proceedLogin(){

    // this.service.GetByCode(this.loginform.value.username).subscribe(res => {
    //   this.userdata=res
    //   if(this.userdata.password === this.loginform.value.password){
    //     sessionStorage.setItem('username', this.userdata.id);
    //     sessionStorage.setItem('userrole', this.userdata.role);
    //     this.router.navigate(['']);

    //   }else{
    //     this.toastr.error("Invalid Creditals");
    //   }

    // });
    sessionStorage.setItem('username', 'admin');
    sessionStorage.setItem('userrole', 'admin');
    this.router.navigate(['']);

  }

}
