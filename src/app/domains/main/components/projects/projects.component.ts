import { Component, inject, signal } from '@angular/core';
import { Project } from '../../../shared/models/project.model';
import { ProjectService } from '../../../shared/services/project.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../../../shared/services/spinner.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectsData=signal<Project[]>([]);
  private spinnerService = inject(SpinnerService);
  private projectService = inject(ProjectService);

  constructor(private toastr: ToastrService){}

  ngOnInit(): void {
    this.getProjectsData();
  }

  
  getProjectsData(){
    this.spinnerService.showSpinner.update(() => true);
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projectsData.set(projects);
        console.log(this.projectsData());
        this.spinnerService.showSpinner.update(() => false);      
      },
      error: (err) => {
        this.toastr.error("Ocurrio un error al cargar los projectos destacados");
        this.spinnerService.showSpinner.update(() => false); 
      },
    });
  }

}
