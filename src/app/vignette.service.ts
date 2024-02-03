import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vignette } from './vignette';

@Injectable({
  providedIn: 'root'
})
export class VignetteService {

  private url = "http://localhost:8081/api/v1/vignettes";

  constructor(private httpClient: HttpClient) { }

  getVignetteList():Observable<Vignette[]>{
    return this.httpClient.get<Vignette[]>(this.url);

  }

  createVignette(vignette:Vignette):Observable<Object>{
    return this.httpClient.post(this.url , vignette);
  }

  getVignetteById(id : number) : Observable<Vignette>{
    return this.httpClient.get<Vignette>(`${this.url}/${id}`);

  }

  updateVignette(id: number, vignette: Vignette): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, vignette);
    }

  deleteVignette(id : number ) : Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
