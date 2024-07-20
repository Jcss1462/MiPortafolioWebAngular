import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collectionData, Firestore, collection,orderBy, query } from '@angular/fire/firestore';
import { ExperienciaLaboral } from '../models/experienciaLaboral.model'; 
import { ExperienciaEducacion } from '../models/experienciaEducacion.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private fireSotre = inject(Firestore);

  constructor() { 
  }

  getExperienceLaboral():Observable<ExperienciaLaboral[]>{

    const experienciaLaboralRef = collection(this.fireSotre, 'ExperienciaLaboral');
    const q = query(experienciaLaboralRef, orderBy('id',"desc"));
    return collectionData(q) as Observable<ExperienciaLaboral[]>;

  }



  getExperienceEducacion():Observable<ExperienciaEducacion[]>{

    const experienciaEducacionRef = collection(this.fireSotre, 'Educacion');
    const q = query(experienciaEducacionRef, orderBy('id',"desc"));
    return collectionData(q) as Observable<ExperienciaEducacion[]>;

  }
}
