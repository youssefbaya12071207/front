import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    // Check if insuranceExpiryDate is set and not expired
    if (this.employee.insuranceExpiryDate && new Date(this.employee.insuranceExpiryDate) < new Date()) {
      // Insurance is expired
      alert('Insurance has expired. Please update the insurance expiry date.');
    } else {
      // Insurance is either valid or not set
      console.log(this.employee);
      this.saveEmployee();
    }
}
}
