import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendasService } from '../agendas.service';

@Component({
  selector: 'app-agendas-forms',
  templateUrl: './agendas-forms.component.html',
  styleUrl: './agendas-forms.component.css'
})
export class AgendasFormsComponent {

  formGroupAgendas: FormGroup;

  constructor(private router: Router,
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

  save(){
    this.service.save(this.formGroupAgendas.value).subscribe({
      next:() => this.router.navigate(['agendas'])
    })
  }
  
}
