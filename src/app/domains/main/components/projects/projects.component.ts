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
      Description: "Ecomerce desarrollado en angular para probar las nuevas capacidades de la versión 18 del framework. \n La data de este proyecto se alimenta de un api publica de platzi",
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
    },

    {
      Title:"Tareas Api",
      Description: "Api Creada con .Net y EntityFramework para la gestión de tareas",
      mainImage: "assets/apiImage.jpg",
      icons:[{
        TecnolgyName:".Net",
        Img:"assets/NET_Core_Logo.png"
      }],
      links:[{
        linkName:"GitHub",
        class:"bi bi-github",
        url:"https://github.com/Jcss1462/ApisConPuntoNet"
      }
    ]
    },
    {
      Title:"La mano de buzz",
      Description: "Composición creada con blender",
      mainImage: "assets/buzzHand.PNG",
      icons:[{
        TecnolgyName:"Blender",
        Img:"assets/blenderLogo.png"
      }],
      links:[{
        linkName:"Instagram",
        class:"bi bi-instagram",
        url:"https://www.instagram.com/p/CihIijJO_ST/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
    },
    {
      Title:"LowPolly En el Espacio",
      Description: "Composición creada con blender y Unity",
      mainImage: "assets/lowPollyEnElEspacio.PNG",
      icons:[{
        TecnolgyName:"Blender",
        Img:"assets/blenderLogo.png"
      },{
        TecnolgyName:"Unity",
        Img:"assets/unityLogo.png"
      }],
      links:[{
        linkName:"Instagram",
        class:"bi bi-instagram",
        url:"https://www.instagram.com/p/CkVBCiks7qc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
    }


  ]

}
