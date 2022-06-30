import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { RouterModule } from '@angular/router';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileEducationModalComponent } from './profile-education/profile-education-modal/profile-education-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationLanguajeModalComponent } from './profile-education/education-languaje-modal/education-languaje-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EducationSkillModalComponent } from './profile-education/education-skill-modal/education-skill-modal.component';
import { ExperienceModalComponent } from './profile-experience/experience-modal/experience-modal.component';
import { ObjetiveModalComponent } from './profile-info/objetive-modal/objetive-modal.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEducationComponent,
    ProfileExperienceComponent,
    ProfileInfoComponent,
    ProfileEducationModalComponent,
    EducationLanguajeModalComponent,
    EducationSkillModalComponent,
    ExperienceModalComponent,
    ObjetiveModalComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[NgbActiveModal]
})
export class ProfileModule { }
