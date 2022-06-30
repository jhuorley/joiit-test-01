import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public people: PeopleEntity = new PeopleEntity();
  public marital_staties: any[] = [
    { id: 1, name: 'Casado/a' },
    { id: 2, name: 'Soltero/a' },
    { id: 3, name: 'Divorciado/a' },
    { id: 4, name: 'Viudo/a' }
  ]
  public genders: any[] = [
    { id: 1, name: 'Masculino/a' },
    { id: 2, name: 'Femenino/a' },
  ]
  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.people.uuid = UUID.UUID();
    //localStorage.setItem('peoples',JSON.stringify([]))
  }

  async register() {
    let result: any = await this.dataService.people.register(this.people);
    if (result.error) { alert(result.error.message) }
    else {
      this.dataService.people.login(this.people.email, this.people.password)
      this.router.navigateByUrl('/main/profile/education')
    }
  }

  validate(): boolean {
    let a: boolean = (this.people.document ? this.people.document.trim() != '' ? true : false : false);
    let b: boolean = (this.people.name ? this.people.name.trim() != '' ? true : false : false);
    let c: boolean = (this.people.celular_number ? this.people.celular_number.trim() != '' ? true : false : false);
    let d: boolean = (this.people.gender ? this.people.gender.trim() != '' ? true : false : false);
    let e: boolean = (this.people.marital_status ? this.people.marital_status.trim() != '' ? true : false : false);
    let f: boolean = (this.people.birth_date ? this.people.birth_date.trim() != '' ? true : false : false);
    let g: boolean = (this.people.email ? this.people.email.trim() != '' ? true : false : false);
    let h: boolean = (this.people.password ? this.people.password.trim() != '' ? true : false : false);
    return !(a ? b ? c ? d ? e ? f ? g ? h ? true : false : false : false : false : false : false:false:false);
  }

}
