import { Injectable } from '@angular/core';
import { students } from './data';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getStudents(){
    return students;
  }
}

