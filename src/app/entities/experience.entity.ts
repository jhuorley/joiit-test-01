import { NivelExperienceEntity } from "./nivel-experience.entity";

export class ExperienceEntity {
    public uuid:string;
    public company:string;
    public activity:string;
    public stall:string;//puesto
    public nivel_experience:NivelExperienceEntity = new NivelExperienceEntity();
    public area:string;
    public start_date:string;
    public end_date:string;
    public description:string;
    constructor(){}
}