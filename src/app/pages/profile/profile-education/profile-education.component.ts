import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AcademicTrainingEntity } from 'src/app/entities/academic-training.entity';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { StateStudyEntity } from 'src/app/entities/state-study.entity';
import { TypeAreaEstudyEntity } from 'src/app/entities/type-area-study.entity';
import { TypeEstudyEntity } from 'src/app/entities/type-study.entity';
import { DataService } from 'src/app/services/data.service';
import { ProfileEducationModalComponent } from './profile-education-modal/profile-education-modal.component';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { EducationLanguajeModalComponent } from './education-languaje-modal/education-languaje-modal.component';
import { LanguajeEntity } from 'src/app/entities/languaje.entity';
import { EducationSkillModalComponent } from './education-skill-modal/education-skill-modal.component';
@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.scss']
})
export class ProfileEducationComponent implements OnInit {
  public people:PeopleEntity = new PeopleEntity();
  public stateTudies:StateStudyEntity[]=[];
  public typeStudies:TypeEstudyEntity[]=[];
  public typeAreaStudies:TypeAreaEstudyEntity[]=[];
  constructor(
    private dataService:DataService,
    private modalService: NgbModal
  ) {

    
   }

  ngOnInit(): void {
    this.loadData();
    
  }

  async loadData(){
    this.stateTudies = await this.dataService.StateEstudyList();
    this.typeStudies = await this.dataService.TypeEstudyList();
    this.typeAreaStudies = await this.dataService.TypeAreaEstudyList();
    let p = await this.dataService.people.getById(this.dataService.people.getToken());
    this.people = p ? p : new PeopleEntity();
    console.log('personas registradas',this.people)
  }
  
  async showNew() {
    const modal = this.modalService.open(ProfileEducationModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.academic = new AcademicTrainingEntity();
    modal.componentInstance.type_studies = this.typeStudies;
    modal.componentInstance.type_area_studies = this.typeAreaStudies;
    modal.componentInstance.state_studies = this.stateTudies;
    modal.componentInstance.is_edit = false;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.people.academics.push(r.academic);
        this.dataService.people.save(this.people);
      }
    })
  }
  showEdit(item:AcademicTrainingEntity) {
    const modal = this.modalService.open(ProfileEducationModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.academic = item;
    modal.componentInstance.type_studies = this.typeStudies;
    modal.componentInstance.type_area_studies = this.typeAreaStudies;
    modal.componentInstance.state_studies = this.stateTudies;
    modal.componentInstance.is_edit = true;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        console.log(r.academic)
        this.dataService.people.save(this.people);
      }
    })
  }

  quitItemAcademic(index:number){
    this.people.academics.splice(index,1);
    this.people.academics = [...this.people.academics]
    this.dataService.people.save(this.people);
  }

  async showNewLanguaje() {
    const modal = this.modalService.open(EducationLanguajeModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.languaje = new LanguajeEntity();
    modal.componentInstance.niveles = await this.dataService.nivelList();
    modal.componentInstance.type_languajes = await this.dataService.typeLanguajeList();
    modal.componentInstance.is_edit = false;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        console.log(r.languaje)
        this.people.languajes.push(r.languaje);
        this.dataService.people.save(this.people);
      }
    })
  }

  async showEditLanguaje(item:LanguajeEntity) {
    const modal = this.modalService.open(EducationLanguajeModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.languaje = item;
    modal.componentInstance.niveles = await this.dataService.nivelList();
    modal.componentInstance.type_languajes = await this.dataService.typeLanguajeList();
    modal.componentInstance.is_edit = true;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.dataService.people.save(this.people);
      }
    })
  }
  quitItemLanguaje(index:number){
    this.people.languajes.splice(index,1);
    this.people.languajes = [...this.people.languajes]
    this.dataService.people.save(this.people);
  }


  async showSkill() {
    const modal = this.modalService.open(EducationSkillModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.skills = [];
    modal.componentInstance.is_edit = false;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.people.skills =  this.people.skills.concat(r.skills);
        this.dataService.people.save(this.people);
      }
    })
  }
  quitSkill(index:number){
    this.people.skills.splice(index,1);
    this.people.skills = [...this.people.skills]
    this.dataService.people.save(this.people);
  }
}
