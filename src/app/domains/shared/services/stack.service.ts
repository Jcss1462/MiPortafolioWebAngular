import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stack } from '../models/stack.model';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  private fireSotre = inject(Firestore);

  constructor() { }

  getStack():Observable<Stack[]>{
    const experienciaLaboralRef = collection(this.fireSotre, 'stack');
    const q = query(experienciaLaboralRef, orderBy('id',"asc"));
    return collectionData(q) as Observable<Stack[]>;
  }

}
