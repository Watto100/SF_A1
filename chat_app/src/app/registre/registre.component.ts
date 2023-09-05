import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, 
    private service: AuthService, private route: Router) {

  }

  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control(''),
    isactive: this.builder.control('', Validators.required),

  })

  proceedRegistration(){

    if(this.registerform.valid){
      this.service.Proceedregistration(this.registerform.value).subscribe(res => {
        this.toastr.success('Registration Successful');
      });
    }else{
      this.toastr.warning('Form not valid');
    }

  }

}
