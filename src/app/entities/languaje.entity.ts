import { NivelEntity } from "./nivel.entity"
import { TypeLanguajeEntity } from "./type-langujae.entity";

export class LanguajeEntity {
    public uuid:string;
    public type_languaje:TypeLanguajeEntity = new TypeLanguajeEntity();
    public write:NivelEntity = new NivelEntity();
    public oral:NivelEntity = new NivelEntity();
}