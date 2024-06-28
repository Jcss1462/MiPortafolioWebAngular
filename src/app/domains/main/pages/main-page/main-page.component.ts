import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { StackComponent } from '../../components/stack/stack.component';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, ExperienceComponent, ProjectsComponent, StackComponent, ContactMeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


}
