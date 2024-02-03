import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-component/update-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateVignetteComponent } from './create-vignette/create-vignette.component';
import { VignetteListComponent } from './vignette-list/vignette-list.component';


const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path: 'create-employee' , component:CreateEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'update-employee/:id',component : UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},
  {path:'create-vignette', component:CreateVignetteComponent},
  {path:'vignettes',component:VignetteListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
