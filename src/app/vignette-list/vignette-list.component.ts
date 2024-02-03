import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vignette } from '../vignette';
import { VignetteService } from '../vignette.service';

@Component({
  selector: 'app-vignette-list',
  templateUrl: './vignette-list.component.html',
  styleUrls: ['./vignette-list.component.css']
})
export class VignetteListComponent implements OnInit {

  vignettes: Vignette[];

  constructor(private vignetteService: VignetteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVignettes();
  }

  private getVignettes(){
    this.vignetteService.getVignetteList().subscribe(data => {
      this.vignettes = data;
    });
  }

  vignetteDetails(id: number){
    this.router.navigate(['vignette-details', id]);
  }

  updateVignette(id: number){
    this.router.navigate(['update-vignette', id]);
  }

  deleteVignette(id: number){
    this.vignetteService.deleteVignette(id).subscribe( data => {
      console.log(data);
      this.getVignettes();
    })
  }

}
