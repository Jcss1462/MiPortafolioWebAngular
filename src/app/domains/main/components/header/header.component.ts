import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { StorageService } from '../../../shared/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private spinnerService = inject(SpinnerService);
  private storageService = inject(StorageService);

  constructor(private toastr: ToastrService) { }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  async downloadPDF() {
    this.spinnerService.showSpinner.update(() => true);

    const url = await this.storageService.downloadCvFile().then(url => {
      const a = document.createElement('a');
      a.href = url;
      a.target="_blank"
      a.setAttribute('download', 'esp_cv_JuanCamiloSalazarSerna_2024.pdf');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.spinnerService.showSpinner.update(() => false);
    }).catch(error => {
      this.toastr.error("Error al descargar el archivo, inténtalo de nuevo más tarde");
      this.spinnerService.showSpinner.update(() => false);
    });

  }

}
