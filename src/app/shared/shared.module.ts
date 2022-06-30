import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import { ProfileModule } from '../pages/profile/profile.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserModule } from '../components/user/user.module';
import { HomeTemplateComponent } from './templates/home-template/home-template.component';
import { HomeNavBarComponent } from './components/home-nav-bar/home-nav-bar.component';
import { LandingNavBarComponent } from './components/landing-nav-bar/landing-nav-bar.component';



@NgModule({
  declarations: [
    MainTemplateComponent,
    HomeTemplateComponent,
    HomeNavBarComponent,
    LandingNavBarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    ProfileModule,
    UserModule
  ]
})
export class SharedModule { }
