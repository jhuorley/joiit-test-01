import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education-skill-modal',
  templateUrl: './education-skill-modal.component.html',
  styleUrls: ['./education-skill-modal.component.scss']
})
export class EducationSkillModalComponent implements OnInit {
  public text:string='';
  public skills:string[]=[];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onNewClose(saved:boolean){
    if(saved){
        this.activeModal.close({saved:true,skills:this.skills})
    } else {
      this.activeModal.close({saved:false,skills:[]})
    }
  }

  addSkill(item:any){
    if(this.text != ''){
      this.skills.push(this.text);
      this.skills = [...this.skills]
      this.text = ''; 
    }
    
  }

  quit(index:number){
    this.skills.splice(index,1)
  }

}
