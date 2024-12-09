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
    return this.http.get<Agendas []>('http://localhost:8080/agendas')
  }

  delete(agendas: Agendas): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/agendas/' + agendas.id)
  }

  save(agendas: Agendas): Observable<Agendas>{
    return this.http.post<Agendas>('http://localhost:8080/agendas', agendas)
  }

}
