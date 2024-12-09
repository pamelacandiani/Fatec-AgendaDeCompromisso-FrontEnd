import { Component, OnInit } from '@angular/core';
import { Agendas } from '../agendas';
import { AgendasService } from '../agendas.service';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrl: './agendas.component.css'
})
export class AgendasComponent implements OnInit {

  agendas: Agendas [] = []

  constructor(private service: AgendasService){}

  ngOnInit(): void {
      this.loadAgendas();
  }

  loadAgendas(){
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    })
  }

}
