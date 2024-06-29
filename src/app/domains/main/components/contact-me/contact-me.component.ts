import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });

  }


  submitForm() {
    
    if (this.contactForm.valid) {
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.contactForm.reset();
    } else {
      this.toastr.error("Ocurrio un problema enviando el correo");
    }
  }

}
