import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPersonalInformationComponent } from './user-personal-information/user-personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { PersonalInformationModalComponent } from './user-personal-information/personal-information-modal/personal-information-modal.component';
import { UserPersonalContactComponent } from './user-personal-contact/user-personal-contact.component';
import { PersonalContactModalComponent } from './user-personal-contact/personal-contact-modal/personal-contact-modal.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [
    UserPersonalInformationComponent,
    PersonalInformationModalComponent,
    UserPersonalContactComponent,
    PersonalContactModalComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserPersonalInformationComponent,
    UserPersonalContactComponent
  ]
})
export class UserModule { }
