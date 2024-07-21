import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private fireSotre = inject(Firestore);

  constructor() { }

  getProjects():Observable<Project[]>{
    const experienciaLaboralRef = collection(this.fireSotre, 'projects');
    const q = query(experienciaLaboralRef, orderBy('id',"asc"));
    return collectionData(q) as Observable<Project[]>;
  }
}
