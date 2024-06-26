import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../../shared/services/send-mail.service';
import { MailBody } from '../../../shared/models/mailBody.model';
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})

export class ContactMeComponent {

  private sendMailService = inject(SendMailService);
  private spinnerService = inject(SpinnerService);
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

      let mailBody: MailBody = {
        to: "jcss1462@gmail.com",
        subject: this.contactForm.get("asunto")?.value,
        text: this.contactForm.get("nombre")?.value + " Te envió el siguiente mensaje:\n\n" + this.contactForm.get("mensaje")?.value + "\n\nContactalo a su correo: " + this.contactForm.get("email")?.value
      }

      this.spinnerService.showSpinner.update(() => true);
      this.sendMailService.addProduct(mailBody)
        .subscribe({
          next: (data) => {
            this.toastr.success("Mensaje enviado con éxito");
            this.contactForm.reset();
            this.spinnerService.showSpinner.update(() => false);
          },
          error: (err) => {
            this.toastr.error("Ocurrió un error al enviar el correo, intenta más tarde");
            this.spinnerService.showSpinner.update(() => false);
          }
        })
      

    } else {
      this.toastr.error("Llena todos los campos obligatorios");
    }
  }

}
