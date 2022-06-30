import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceEntity } from 'src/app/entities/experience.entity';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { DataService } from 'src/app/services/data.service';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss']
})
export class ProfileExperienceComponent implements OnInit {
  public people:PeopleEntity = new PeopleEntity();
  constructor(    
    private dataService:DataService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.dataService.people.getById(this.dataService.people.getToken()).then((p:PeopleEntity)=>{
      this.people = p ? p : new PeopleEntity();
      this.people.experiences = this.people.experiences ? this.people.experiences :[];
      console.log('personitas',this.people)
    });
  }
  async showNew() {
    const modal = this.modalService.open(ExperienceModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.experience = new ExperienceEntity();
    modal.componentInstance.nivel_experiences = await this.dataService.nivelExperienceList();
    modal.componentInstance.is_edit = false;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.people.experiences.push(r.experience);
        this.dataService.people.save(this.people);
      }
    })
  }

  async showEdit(item:ExperienceEntity) {
    const modal = this.modalService.open(ExperienceModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.experience = item;
    modal.componentInstance.nivel_experiences = await this.dataService.nivelExperienceList();
    modal.componentInstance.is_edit = true;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.dataService.people.save(this.people);
      }
    })
  }

  quitItem(index:number){
    this.people.experiences.splice(index,1);
    this.people.experiences = [...this.people.experiences]
    this.dataService.people.save(this.people);
  }
}
