import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { PatientList } from './features/patients/patient-list/patient-list';
import { PatientForm } from './features/patients/patient-form/patient-form';
import { authGuard } from './core/guards/auth-guard';
export const routes: Routes = [
    {
        path:'login',
        component:Login
    },
    {
        path:'patients',
        component:PatientList,
        canActivate:[authGuard]
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
    path: 'patients/add',
    component: PatientForm,
    canActivate: [authGuard]
  },
{
  path: 'patients/edit/:id',
  component: PatientForm,
    canActivate: [authGuard]
}
];
