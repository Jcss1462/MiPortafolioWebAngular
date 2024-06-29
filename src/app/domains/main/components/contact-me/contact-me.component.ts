import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../../shared/services/send-mail.service';

import { MailBody } from '../../../shared/models/mailBody.model';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})

export class ContactMeComponent {

  private sendMailService = inject(SendMailService);
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

      let mailBody:MailBody={
        from: "onboarding@resend.dev",
        to:"jcss1462@gmail.com",
        subject:this.contactForm.get("asunto")?.value,
        html:"<p>"+this.contactForm.get("nombre")?.value+" Te envió el siguiente mensaje: <br>"+this.contactForm.get("mensaje")?.value+"<br>Contactalo a su correo: "+this.contactForm.get("email")?.value+"</p>"
      }

      this.sendMailService.addProduct(mailBody)
        .subscribe({
          next: (data) => {
            this.toastr.success("Mensaje enviado con éxito");
          },
          error: () => {
            this.toastr.error("Ocurrió un error al enviar el correo, intenta más tarde");
          }
        })

      
      this.contactForm.reset();
    } else {
      this.toastr.error("Llena todos los campos obligatorios");
    }
  }

}
