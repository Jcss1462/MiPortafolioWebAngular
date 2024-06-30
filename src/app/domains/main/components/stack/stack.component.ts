import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {

  stacks=[
    {
      categoria:"Lenguajes",
      items:[
        {
          name:"Html",
          logo:"assets/htmlLogo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"Css",
          logo:"assets/CSS3_logo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"JavaScript",
          logo:"assets/javascriptLogo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"TypeScript",
          logo:"assets/Typescript_logo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"Java",
          logo:"assets/javaLogo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"C#",
          logo:"assets/cCharpLogo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"Python",
          logo:"assets/pythonLogo.png",
          desc:"Lenguaje de Programación"
        },
        {
          name:"SQL",
          logo:"assets/sqlLogo.png",
          desc:"Lenguaje de Programación"
        }        
      ]
    },
    {
      categoria:"Frameworks",
      items:[
        {
          name:"Angular",
          logo:"assets/angularIcon.png",
          desc:"Framework para desarrollo FrontEnd"
        },
        {
          name:"Bootstrap",
          logo:"assets/Bootstrap_logo.png",
          desc:"Framework de estilos"
        },
        
        {
          name:".Net",
          logo:"assets/NET_Core_Logo.png",
          desc:"Framework para desarrollo BackEnd"
        }
      ]
    }
    ,
    {
      categoria:"Motores de Base de Datos",
      items:[
        {
          name:"Oracle Sql",
          logo:"assets/oracleSqlLogo.png",
          desc:"Motor de base de datos"
        },
        {
          name:"Postgresql",
          logo:"assets/Postgresql_elephant.png",
          desc:"Framework de estilos"
        },
        
        {
          name:"Sql Server",
          logo:"assets/sqlServerLogo.png",
          desc:"Framework para desarrollo BackEnd"
        }
      ]
    },
    {
      categoria:"DevOps",
      items:[
        {
          name:"AWS",
          logo:"assets/awsLogo.png",
          desc:"Proveedor de servicio en la nube"
        },
        {
          name:"Docker",
          logo:"assets/dockerLogo.png",
          desc:"Gestor de contenedores"
        },   
        {
          name:"Azure DevOps",
          logo:"assets/azureDevOpsLogo.png",
          desc:"Gestor de ciclo de vida de proyectos"
        }
      ]
    },
    {
      categoria:"Herramientas",
      items:[
        {
          name:"GitHub",
          logo:"assets/gitHubLogoWhite.png",
          desc:"Gestor de versiones"
        },
        {
          name:"Power Automate",
          logo:"assets/powerAutomateLogo.png",
          desc:"Automatización de procesos"
        },   
        {
          name:"Power Apps",
          logo:"assets/powerAppsLogo.png",
          desc:"Creacion De Aplicaciones"
        }
      ]
    },
    {
      categoria:"Desarrollo de Videojuegos",
      items:[
        {
          name:"Blender",
          logo:"assets/blenderLogo.png",
          desc:"Modelado y animacion 3D"
        },
        {
          name:"Unity",
          logo:"assets/unityLogoWhite.png",
          desc:"Motor de Videojuegos"
        }
      ]
    }
  ];

}
