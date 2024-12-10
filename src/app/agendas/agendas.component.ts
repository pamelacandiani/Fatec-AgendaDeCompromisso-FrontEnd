import { Router } from '@angular/router';
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

  constructor(private service: AgendasService, private router: Router){}

  ngOnInit(): void {
      this.loadAgendas();
  }

  loadAgendas(){
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    })
  }

  delete(agendas: Agendas){
    this.service.delete(agendas).subscribe({
      next: () => this.loadAgendas()
    })
  }

  create(){
    this.router.navigate(['agendas-forms'])
  }
  
}
