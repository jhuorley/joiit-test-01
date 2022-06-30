import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEducationComponent } from './pages/profile/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './pages/profile/profile-experience/profile-experience.component';
import { ProfileInfoComponent } from './pages/profile/profile-info/profile-info.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainTemplateComponent } from './shared/templates/main-template/main-template.component';
import { HomeTemplateComponent } from './shared/templates/home-template/home-template.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main/profile/education',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeTemplateComponent,
    children:[
      {
        path:'register',
        component:UserRegisterComponent
      },
      {
        path:'login',
        component:UserLoginComponent
      }
    ]
  },
  {
    path:'main',
    component:MainTemplateComponent,
    canActivate:[MainGuard],
    children: [
      {
        path:'profile',
        component:ProfileComponent,
        children:[
          {
            path:'education',
            component:ProfileEducationComponent
          },
          {
            path:'experience',
            component:ProfileExperienceComponent
          },
          {
            path:'info',
            component:ProfileInfoComponent
          }
        ]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
