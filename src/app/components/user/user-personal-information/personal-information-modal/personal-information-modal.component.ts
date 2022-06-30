import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NationalityEntity } from 'src/app/entities/nationality.entity';
import { PeopleEntity } from 'src/app/entities/people.entity';

@Component({
  selector: 'app-personal-information-modal',
  templateUrl: './personal-information-modal.component.html',
  styleUrls: ['./personal-information-modal.component.scss']
})
export class PersonalInformationModalComponent implements OnInit {
  public people:PeopleEntity = new PeopleEntity();
  public nationalities:NationalityEntity[]= [
    new NationalityEntity(1,'Peruano'),
    new NationalityEntity(1,'Chileno'),
    new NationalityEntity(1,'Boliviano'),
    new NationalityEntity(1,'Brazileño'),
    new NationalityEntity(1,'Americano')
  ];
  public marital_staties:any[]=[
    {id:1,name:'Casado/a'},
    {id:2,name:'Soltero/a'},
    {id:3,name:'Divorciado/a'},
    {id:4,name:'Viudo/a'}
  ]
  public genders:any[]=[
    {id:1,name:'Masculino/a'},
    {id:2,name:'Femenino/a'},
  ]
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  onNewClose(saved:boolean){
    let valida:boolean = this.people.name ? this.people.nationality ? this.people.marital_status ? this.people.gender ? this.people.document ? true:false:false:false:false:false;
    if(saved){
      if(valida){
        this.activeModal.close({saved:true,people:this.people})
      } else {
        alert('No es posible realizar el registro/guardado, por faltan llenar campos.')
      }
      
    } else {
      this.activeModal.close({saved:false,people:null})
    }
  }
}
