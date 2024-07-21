import { Component, inject, signal } from '@angular/core';
import { Stack } from '../../../shared/models/stack.model';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { StackService } from '../../../shared/services/stack.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {


  stackData=signal<Stack[]>([]);
  private spinnerService = inject(SpinnerService);
  private stackService = inject(StackService);

  constructor(private toastr: ToastrService){}

  ngOnInit(): void {
    this.getStackData();
  }

  
  getStackData(){
    this.spinnerService.showSpinner.update(() => true);
    this.stackService.getStack().subscribe({
      next: (stack) => {
        this.stackData.set(stack);
        this.spinnerService.showSpinner.update(() => false);      
      },
      error: (err) => {
        this.toastr.error("Ocurrio un error al cargar el stack");
        this.spinnerService.showSpinner.update(() => false); 
      },
    });
  }

}
