import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects=[
    {
      Title:"Platzi Store",
      Description: "Ecomerce desarrollado en angular para probar la nuevas capacidades de la versión 18 del framework. \n La data de este proyecto se alimenta de un api publica de platzi",
      mainImage: "assets/platziStore.PNG",
      icons:[{
        TecnolgyName:"Angular",
        Img:"assets/angularIcon.png"
      },{
        TecnolgyName:"TailwindCss",
        Img:"assets/Tailwind_CSS_Logo.png"
      }],
      links:[{
        linkName:"GitHub",
        class:"bi bi-github",
        url:"https://github.com/Jcss1462/store"
      },
      {
        linkName:"Web",
        class:"bi bi-globe-americas",
        url:"https://store-1wemzdrvj-juan-camilo-salazar-sernas-projects.vercel.app/"
      }
    ]
    }
  ]

}
