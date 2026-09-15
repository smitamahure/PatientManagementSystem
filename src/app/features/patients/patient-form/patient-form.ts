import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../../../core/services/patient';

@Component({
  selector: 'app-patient-form',
  imports: [FormsModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css',
})
export class PatientForm {

  private patientService = inject(PatientService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  patientId: number | null = null;
  isEditMode = false;

  patient = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    bloodGroup: ''
  };

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.patientId = Number(id);
      this.isEditMode = true;

      this.loadPatient(this.patientId);
    }
  }

  // Load existing patient for Edit
  loadPatient(id: number) {

    this.patientService.getPatientById(id).subscribe({

      next: (patient) => {

        console.log('Patient loaded:', patient);

        this.patient = {
          firstName: patient.firstName,
          lastName: patient.lastName,
          dateOfBirth: patient.dateOfBirth
            ? patient.dateOfBirth.substring(0, 10)
            : '',
          gender: patient.gender,
          phone: patient.phone,
          email: patient.email,
          address: patient.address,
          bloodGroup: patient.bloodGroup
        };

      },

      error: (error) => {

        console.error('Error loading patient:', error);

        alert('Error loading patient');

      }

    });
  }

  savePatient() {

  // EDIT PATIENT
  if (this.isEditMode && this.patientId !== null) {

    this.patientService
      .updatePatient(this.patientId, this.patient)
      .subscribe({

        next: (response) => {

          console.log('Patient updated:', response);

          alert('Patient updated successfully!');

          this.router.navigate(['/patients']);

        },

        error: (error) => {

          console.error('Error updating patient:', error);

          alert('Error updating patient');

        }

      });

  }

  // ADD PATIENT
  else {

    this.patientService
      .createPatient(this.patient)
      .subscribe({

        next: (response) => {

          console.log('Patient created:', response);

          alert('Patient created successfully!');

          this.router.navigate(['/patients']);

        },

        error: (error) => {

          console.error('Error creating patient:', error);

          alert('Error creating patient');

        }

      });

  }
}

  resetForm() {

    this.patient = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      bloodGroup: ''
    };

  }
}