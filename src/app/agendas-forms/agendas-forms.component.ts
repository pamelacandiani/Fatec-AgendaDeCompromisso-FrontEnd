import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendasService } from '../agendas.service';

@Component({
  selector: 'app-agendas-forms',
  templateUrl: './agendas-forms.component.html',
  styleUrl: './agendas-forms.component.css'
})
export class AgendasFormsComponent implements OnInit{

  formGroupAgendas: FormGroup;

  isEditing: boolean = false;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,
    private service: AgendasService,
  )

  {
    this.formGroupAgendas = FormBuilder.group({
      id          : [''],
      compromisso : [''],
      date        : [''],
      time        : [''],
      local       : [''],
    });
  }

  ngOnInit(): void {
      const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
      if(id != 0){
        this.isEditing=true;
        this.loadAgenda(id);
      }
  }

  loadAgenda(id: number){
    this.service.getAgendasById(id).subscribe({
      next: data => this.formGroupAgendas.setValue(data)
    });
  }

  save(){
    this.service.save(this.formGroupAgendas.value).subscribe({
      next:() => this.router.navigate(['agendas'])
    })
  }

  update(){
    this.service.update(this.formGroupAgendas.value).subscribe({
      next: () => this.router.navigate(['agendas'])
    });
  }

}
