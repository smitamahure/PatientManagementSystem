import { Component, OnInit, inject } from '@angular/core';
import { PatientService} from '../../../core/services/patient';
import { Patient } from '../../../models/patient';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth';
@Component({
  selector: 'app-patient-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientList implements OnInit {

  private readonly patientService = inject(PatientService);
  private readonly router = inject(Router);

  patients: Patient[] = [];
  errorMessage = '';
  isLoading = false;


ngOnInit() {
  this.loadPatients();
}

loadPatients() {
  
  this.isLoading = true;
  this.errorMessage = '';

  this.patientService.getPatients().subscribe({
    next: (response) => {
      this.patients = response;
      this.isLoading = false;
    },

    error: (error) => {
      console.error('Error loading patients:', error);
      this.errorMessage = 'Unable to load patients.';
      this.isLoading = false;
    }
  });
}
editPatient(id: number) {
  this.router.navigate(['/patients/edit', id]);
}
deletePatient(id: number) {

  const confirmDelete = confirm(
    'Are you sure you want to delete this patient?'
  );

  if (!confirmDelete) {
    return;
  }

  this.patientService.deletePatient(id).subscribe({
    next: () => {
      alert('Patient deleted successfully');

      this.loadPatients();
    },

    error: (error) => {
      console.error('Delete failed:', error);
      alert('Failed to delete patient');
    }
  });
}
private auth = inject(AuthService);
logout() {

  this.auth.logout();

  this.router.navigate(['/login']);

}
}