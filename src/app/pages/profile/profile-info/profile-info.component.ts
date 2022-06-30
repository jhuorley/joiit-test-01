import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { DataService } from 'src/app/services/data.service';
import { ObjetiveModalComponent } from './objetive-modal/objetive-modal.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  public people:PeopleEntity = new PeopleEntity();
  constructor(
    private dataService:DataService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.dataService.people.getById(this.dataService.people.getToken()).then((p:PeopleEntity)=>{
      this.people = p ? p : new PeopleEntity();
      //this.people.experiences = this.people.experiences ? this.people.experiences :[];
      console.log('info',this.people)
    });
  }

  showEditObjetivo(){
    const modal = this.modalService.open(ObjetiveModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.objetive = this.people.objetive;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.people.objetive = r.objetive;
        this.dataService.people.save(this.people);
      }
    })
  }
}
