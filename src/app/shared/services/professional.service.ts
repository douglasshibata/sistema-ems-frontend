import { ProfessionalContact } from './../models/professional-contact';
import { Professional } from './../models/professional';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { ProfessionalAddress } from '../models/professional-address';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private httpClient: HttpClient) { }

  getProfessional(): Observable<Professional[]> {
    return this.httpClient.get<Professional[]>(`${API}professionals/`);
  }

  getProfessionalAddress(): Observable<ProfessionalAddress[]> {
    return this.httpClient.get<ProfessionalAddress[]>(`${API}professionals-addresses/`);
  }

  getProfessionalContact(): Observable<ProfessionalContact[]> {
    return this.httpClient.get<ProfessionalContact[]>(`${API}professionals-contacts/`);
  }

  getProfessionalById(id: number): Observable<Professional> {
    return this.httpClient.get<Professional>(`${API}professionals/${id}/`);
  }

  filterProfessionalsBySpecialityORCity(city: string, speciality: string,name:string): Observable<Professional[]> {
    if (speciality === undefined || speciality === null) {
      speciality = '';
    }
    if (city === undefined || city === null) {
      city = '';
    }
    if (name === undefined || name === null) {
      name = '';
    }
    return this.httpClient.get<Professional[]>(`${API}professionals/?speciality=${speciality}&city=${city}&name=${name}`);
  }

}
