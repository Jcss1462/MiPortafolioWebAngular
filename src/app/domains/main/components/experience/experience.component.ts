import { Component, inject, signal } from '@angular/core';
import { ExperienceService } from '../../../shared/services/experience.service';
import { ExperienciaLaboral } from '../../../shared/models/experienciaLaboral.model';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaEducacion } from '../../../shared/models/experienciaEducacion.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {




  isEducation=signal(false);
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
    this.experienceService.getExperienceEducacion().subscribe({
      next: (experienciaEducacion) => {
        this.experienciaEducacion.set(experienciaEducacion);      
      },
      error: (err) => {
        this.toastr.error("Ocurrio un error al cargar la experiencia de educación");
      },
    });
  }

  changeIsEducation(){
    this.isEducation.update((oldValue)=>!oldValue);
  }

}
