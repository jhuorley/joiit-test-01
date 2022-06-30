import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { AcademicTrainingEntity } from 'src/app/entities/academic-training.entity';
import { StateStudyEntity } from 'src/app/entities/state-study.entity';
import { TypeAreaEstudyEntity } from 'src/app/entities/type-area-study.entity';
import { TypeEstudyEntity } from 'src/app/entities/type-study.entity';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-profile-education-modal',
  templateUrl: './profile-education-modal.component.html',
  styleUrls: ['./profile-education-modal.component.scss']
})
export class ProfileEducationModalComponent implements OnInit {
  @Input()
  public academic:AcademicTrainingEntity= new AcademicTrainingEntity();
  public type_studies:TypeEstudyEntity[]=[];
  public type_area_studies:TypeAreaEstudyEntity[]=[];
  public state_studies:StateStudyEntity[]=[];
  public is_edit:boolean=false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(!this.is_edit){
      this.academic.start_date = moment().format('YYYY-MM-DD');
      this.academic.end_date = moment().format('YYYY-MM-DD');
      this.academic.uuid = UUID.UUID();
    }

  }

  onNewClose(saved:boolean){
    let valida:boolean = this.academic.job_title ? this.academic.type_study.id ? this.academic.type_area_study.id ? this.academic.state_study.id ? true:false:false:false:false;
    if(saved){
      if(valida){
        this.academic.type_study.name = this.type_studies.find(x=>x.id ==this.academic.type_study.id)?.name;
        this.academic.type_area_study.name = this.type_area_studies.find(x=>x.id ==this.academic.type_area_study.id)?.name;
        this.academic.state_study.name = this.state_studies.find(x=>x.id ==this.academic.state_study.id)?.name;
        this.activeModal.close({saved:true,academic:this.academic})
      } else {
        alert('No es posible realizar el registro, por faltan llenar campos.')
      }
      
    } else {
      this.activeModal.close({saved:false,academic:null})
    }
  }

}
