import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendas } from './agendas';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  constructor(private http:HttpClient) {}

  getAgendas(): Observable<Agendas []>{
    return this.http.get<Agendas []>('http://localhost:3000/Agendas')
  }
}
