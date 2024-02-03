import { Component, OnInit } from '@angular/core';
import { Vignette } from '../vignette';
import { Router } from '@angular/router';
import { VignetteService } from '../vignette.service';

@Component({
  selector: 'app-create-vignette',
  templateUrl: './create-vignette.component.html',
  styleUrls: ['./create-vignette.component.css']
})
export class CreateVignetteComponent implements OnInit{

  vignette: Vignette = new Vignette();
  constructor(private vignetteService: VignetteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveVignette(){
    this.vignetteService.createVignette(this.vignette).subscribe( data =>{
      console.log(data);
      this.goToVignetteList();
    },
    error => console.log(error));
  }

  goToVignetteList(){
    this.router.navigate(['/vignette']);
  }

  onSubmit(): void {
    // Check if insuranceExpiryDate is set and not expired
    if (this.vignette.start && new Date(this.vignette.start) < new Date()) {
      // Insurance is expired
      alert('Insurance has expired. Please update the insurance expiry date.');
    } else {
      // Insurance is either valid or not set
      console.log(this.vignette);
      this.saveVignette();
    }
}

}
