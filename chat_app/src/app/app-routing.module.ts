import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { GroupPageComponent } from './group-page/group-page.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegistreComponent},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserlistingComponent},
  {path:'group', component: GroupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
