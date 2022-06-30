import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-objetive-modal',
  templateUrl: './objetive-modal.component.html',
  styleUrls: ['./objetive-modal.component.scss']
})
export class ObjetiveModalComponent implements OnInit {
  public is_edit:boolean = false;
  public objetive:string ='';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  onNewClose(saved:boolean){
    if(saved){
      if(this.objetive.trim() != ''){
        this.activeModal.close({saved:true,objetive:this.objetive})
      } else {
        alert('No es posible realizar el registro/guardado, por faltan llenar campos.')
      }
      
    } else {
      this.activeModal.close({saved:false,objetive:null})
    }
  }
}
