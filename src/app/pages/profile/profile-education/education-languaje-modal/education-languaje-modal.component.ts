import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { LanguajeEntity } from 'src/app/entities/languaje.entity';
import { NivelEntity } from 'src/app/entities/nivel.entity';
import { TypeLanguajeEntity } from 'src/app/entities/type-langujae.entity';

@Component({
  selector: 'app-education-languaje-modal',
  templateUrl: './education-languaje-modal.component.html',
  styleUrls: ['./education-languaje-modal.component.scss']
})
export class EducationLanguajeModalComponent implements OnInit {

  @Input()
  public languaje:LanguajeEntity= new LanguajeEntity();
  public niveles: NivelEntity[]=[];
  public type_languajes:TypeLanguajeEntity[]=[];
  public is_edit:boolean=false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(!this.is_edit){
      this.languaje.uuid = UUID.UUID();
    }
  }

  onNewClose(saved:boolean){
    let valida:boolean = this.languaje.write ? this.languaje.oral.id ? true:false:false;
    if(saved){
      if(valida){
        this.languaje.write.name = this.niveles.find(x=>x.id ==this.languaje.write.id)?.name;
        this.languaje.oral.name = this.niveles.find(x=>x.id ==this.languaje.oral.id)?.name;
        this.languaje.type_languaje.name = this.type_languajes.find(x=>x.id == this.languaje.type_languaje.id)?.name;
        this.activeModal.close({saved:true,languaje:this.languaje})
      } else {
        alert('No es posible realizar el registro, por faltan llenar campos.')
      }
      
    } else {
      this.activeModal.close({saved:false,languaje:null})
    }
  }


}
