import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RecomendationComponent } from './recomendation.component';
import { RecomendationRouting } from './recomendation-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RecomendationRouting,
    MaterialModule,
    CommonModule
  ],
  declarations: [RecomendationComponent],
  exports: [RecomendationComponent],
  providers: []
})
export class RecomendationModule { }
