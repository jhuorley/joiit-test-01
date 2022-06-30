import { AcademicTrainingEntity } from "./academic-training.entity";
import { ExperienceEntity } from "./experience.entity";
import { LanguajeEntity } from "./languaje.entity";
import { ProfileEntity } from "./profile.entity";

export class PeopleEntity {
    academics:AcademicTrainingEntity[]=[];
    languajes:LanguajeEntity[]=[];
    skills:string[]=[];
    experiences:ExperienceEntity[]=[];
    objetive:string;
    amount:string;

    uuid:string;
    name:string;
    document:string;
    nationality:string;
    birth_date:string;
    gender:string;
    marital_status:string;

    celular_number:string;
    phone_number:string;
    email:string;
    password:string;
    direction:string;
    
    constructor(){
    }
}