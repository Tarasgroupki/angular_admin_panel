import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ServiceComponent } from './service.component';
import { ServiceRouting } from './service-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ServiceRouting,
    MaterialModule,
    CommonModule
  ],
  declarations: [ServiceComponent],
  exports: [ServiceComponent],
  providers: []
})
export class ServiceModule { }
