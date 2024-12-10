import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendas } from './agendas';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  url='http://localhost:8080/agendas'

  constructor(private http:HttpClient) {}

  getAgendas(): Observable<Agendas []>{
    return this.http.get<Agendas []>(this.url)
  }

  getAgendasById(id:number): Observable<Agendas>{
    return this.http.get<Agendas>(`${this.url}/${id}`)
  }

  delete(agendas: Agendas): Observable<void>{
    return this.http.delete<void>(`${this.url}/${agendas.id}`)
  }

  save(agendas: Agendas): Observable<Agendas>{
    return this.http.post<Agendas>(this.url, agendas)
  }

  update(agendas: Agendas): Observable<Agendas>{
    return this.http.put<Agendas>(`${this.url}/${agendas.id}`, agendas)
  }

}
