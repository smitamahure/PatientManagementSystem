import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'https://localhost:7010/api/Patients';

  getPatients(): Observable<Patient[]> {

    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientById(id: number) {

  return this.http.get<any>(
    `${this.apiUrl}/${id}`
  );

}

  createPatient(patient: any) {
  return this.http.post(
    this.apiUrl,
    patient
  );
}
updatePatient(id: number, patient: any) {
  return this.http.put(
    `${this.apiUrl}/${id}`,
    patient
  );
}
deletePatient(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
  
}
