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
        }      
      ]
    }
  ];

}
