import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      // Aquí podrías enviar los datos a través de un servicio HTTP o manejar la lógica de envío
      console.log(this.contactForm.value); // Aquí tendrás acceso a los valores del formulario
      // Puedes limpiar el formulario después de enviarlo
      this.contactForm.reset();
    } else {
      alert("Ocurrió un error insuperado enviando el mensaje");
    }
  }

}
