import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { PricingComponent } from './pricing.component';
import { PricingRouting } from './pricing-routing.module';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-smart-popover';
import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  imports: [
    MdePopoverModule,
    PricingRouting,
    MaterialModule,
    PopoverModule,
    CommonModule
  ],
  declarations: [PricingComponent],
  exports: [PricingComponent],
  providers: []
})
export class PricingModule { }
