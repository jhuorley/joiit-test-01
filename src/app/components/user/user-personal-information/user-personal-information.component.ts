import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { DataService } from 'src/app/services/data.service';
import { PersonalInformationModalComponent } from './personal-information-modal/personal-information-modal.component';

@Component({
  selector: 'app-user-personal-information',
  templateUrl: './user-personal-information.component.html',
  styleUrls: ['./user-personal-information.component.scss']
})
export class UserPersonalInformationComponent implements OnInit {

  public people:PeopleEntity = new PeopleEntity();
  constructor(    
    private dataService:DataService,
    private modalService: NgbModal
    ) { }
  ngOnInit(): void {
    this.dataService.people.getById(this.dataService.people.getToken()).then((p:PeopleEntity)=>{
      this.people = p ? p : new PeopleEntity();
    });
  }

  getImg(){
    if(this.people.gender =='Masculino/a'){return '/assets/img/avatar-masculino.jpg'}
    else { return '/assets/img/avatar-femenino.png';}
  }

  async shoeEdit(){
    const modal = this.modalService.open(PersonalInformationModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.people = this.people;
    modal.componentInstance.is_edit = true;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.dataService.people.save(this.people);
      }
    })
  }
}
