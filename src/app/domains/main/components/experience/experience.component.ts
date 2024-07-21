import { Component, inject, signal } from '@angular/core';
import { ExperienceService } from '../../../shared/services/experience.service';
import { ExperienciaLaboral } from '../../../shared/models/experienciaLaboral.model';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaEducacion } from '../../../shared/models/experienciaEducacion.model';
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  isEducation=signal(false);
  private spinnerService = inject(SpinnerService);
  private experienceService = inject(ExperienceService);
  experienciaLaboral=signal<ExperienciaLaboral[]>([]);
  experienciaEducacion=signal<ExperienciaEducacion[]>([]);

  constructor(private toastr: ToastrService){

  }

  ngOnInit(): void {
    this.getExpereienciaLaboral();
    this.getExpereienciaEducacion();
  }

  
  getExpereienciaLaboral(){
    this.spinnerService.showSpinner.update(() => true);
    this.experienceService.getExperienceLaboral().subscribe({
      next: (experienciaLaboral) => {
        this.experienciaLaboral.set(experienciaLaboral);      
      },
      error: (err) => {
        this.toastr.error("Ocurrio un error al cargar la experiencia laboral");
      },
    });
  }

  getExpereienciaEducacion(){
    this.spinnerService.showSpinner.update(() => true);
    this.experienceService.getExperienceEducacion().subscribe({
      next: (experienciaEducacion) => {
        this.experienciaEducacion.set(experienciaEducacion); 
        this.spinnerService.showSpinner.update(() => false);
      },
      error: (err) => {
        this.toastr.error("Ocurrio un error al cargar la experiencia de educación");
        this.spinnerService.showSpinner.update(() => false);
      },
    });
  }

  changeIsEducation(){
    this.isEducation.update((oldValue)=>!oldValue);
  }

}
