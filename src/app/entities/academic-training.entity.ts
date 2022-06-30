import { StateStudyEntity } from "./state-study.entity";
import { TypeAreaEstudyEntity } from "./type-area-study.entity";
import { TypeEstudyEntity } from "./type-study.entity";

export class AcademicTrainingEntity {
    public uuid:string;
    public job_title:string;
    public country:string;
    public type_study:TypeEstudyEntity = new TypeEstudyEntity();
    public type_area_study:TypeAreaEstudyEntity = new TypeAreaEstudyEntity();
    public institution:string;
    public state_study:StateStudyEntity = new StateStudyEntity();
    public start_date:string;
    public end_date:string;
    constructor(){ }
}