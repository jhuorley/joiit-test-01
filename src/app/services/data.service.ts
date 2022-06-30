import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { NivelExperienceEntity } from '../entities/nivel-experience.entity';
import { NivelEntity } from '../entities/nivel.entity';
import { StateStudyEntity } from '../entities/state-study.entity';
import { TypeAreaEstudyEntity } from '../entities/type-area-study.entity';
import { TypeEstudyEntity } from '../entities/type-study.entity';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public people:PeopleService
  ) { }

  async typeLanguajeList(): Promise<NivelEntity[]> {
    return [
      { id: 1, name: 'Inglés' },
      { id: 2, name: 'Español' }
    ];
  }

  async nivelList(): Promise<NivelEntity[]> {
    return [
      { id: 1, name: 'Básico' },
      { id: 2, name: 'Intermedio' },
      { id: 3, name: 'Avanzado' },
      { id: 3, name: 'Nativo' }
    ];
  }

  async nivelExperienceList(): Promise<NivelExperienceEntity[]> {
    return [
      { id: 1, name: 'Training' },
      { id: 2, name: 'Junior' },
      { id: 3, name: 'SemiJunior' },
      { id: 3, name: 'Senior' }
    ];
  }

  async StateEstudyList(): Promise<StateStudyEntity[]> {
    return [
      { id: 1, name: 'En Curso' },
      { id: 2, name: 'Graduado' },
      { id: 3, name: 'Abandonado' },
    ];
  }

  async TypeEstudyList(): Promise<TypeEstudyEntity[]> {
    return [
      { id: 1, name: 'Primario' },
      { id: 2, name: 'Secundario' },
      { id: 3, name: 'Superior Ténico' },
      { id: 4, name: 'Universitario' },
      { id: 5, name: 'Postgrado' },
      { id: 6, name: 'Bachiller' }
    ];
  }

  async TypeAreaEstudyList(): Promise<TypeAreaEstudyEntity[]> {
    return [
      {
        id: 1,
        name: "Pontificia Universidad Católica del Perú",
      },
      {
        id: 2,
        name: "Instituto de Estudios Europeos",
      },
      {
        id: 3,
        name: "Universidad Alas Peruanas",
      },
      {
        id: 4,
        name: "Universidad de Lima",
      },
      {
        id: 5,
        name: "Universidad de San Martin de Porres",
      },
      {
        id: 6,
        name: "Universidad del Pacifico",
      },
      {
        id: 7,
        name: "Universidad Inca Garcilaso de la Vega",
      },
      {
        id: 8,
        name: "Universidad N. Wiener",
      },
      {
        id: 9,
        name: "Universidad Nacional de Ingeniería",
      },
      {
        id: 10,
        name: "Universidad Nacional Federico Villarreal",
      },
      {
        id: 11,
        name: "Universidad Nacional Mayor de San Marcos",
      },
      {
        id: 12,
        name: "Universidad Peruana de Ciencias Aplicadas",
      },
      {
        id: 13,
        name: "Universidad Ricardo Palma",
      },
    ];
  }
}
