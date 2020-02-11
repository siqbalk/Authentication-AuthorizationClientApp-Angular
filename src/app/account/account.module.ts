import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserService } from '../shared/services/user.service';
import { SharedModule } from '../shared/modules/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, AccountRoutingModule, SharedModule, FormsModule
  ],
  declarations: [RegistrationFormComponent, LoginFormComponent],
  providers:    [ UserService ]
})
export class AccountModule { }
