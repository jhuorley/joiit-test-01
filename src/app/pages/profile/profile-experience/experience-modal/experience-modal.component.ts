import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { ExperienceEntity } from 'src/app/entities/experience.entity';
import { NivelExperienceEntity } from 'src/app/entities/nivel-experience.entity';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.scss']
})
export class ExperienceModalComponent implements OnInit {
  public experience:ExperienceEntity = new ExperienceEntity();
  public is_edit:boolean = false;
  public nivel_experiences:NivelExperienceEntity[]=[];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(!this.is_edit){
      this.experience.uuid = UUID.UUID();
    }
  }

  onNewClose(saved:boolean){
    let valida:boolean = this.experience.nivel_experience.id ? this.experience.company ? this.experience.activity ? this.experience.stall ? true:false:false:false:false;
    if(saved){
      if(valida){
        this.experience.nivel_experience.name = this.nivel_experiences.find(x=>x.id == this.experience.nivel_experience.id)?.name;
        this.activeModal.close({saved:true,experience:this.experience})
      } else {
        alert('No es posible realizar el registro/guardado, por faltan llenar campos.')
      }
      
    } else {
      this.activeModal.close({saved:false,experience:null})
    }
  }

}
