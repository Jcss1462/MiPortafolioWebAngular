import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/esp_cv_JuanCamiloSalazarSerna_2024.pdf';  // Asegúrate de que la ruta sea correcta
    link.download = 'esp_cv_JuanCamiloSalazarSerna_2024.pdf'; // Nombre del archivo que se descargará
    link.click();
  }

}
