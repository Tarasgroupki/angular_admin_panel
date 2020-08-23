import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FoldersComponent } from './folders.component';
import { FoldersRouting } from './folders-routing.module';
import { CommonModule } from '@angular/common';
import { FoldersService } from './folders.service';

@NgModule({
  imports: [
    FoldersRouting,
    MaterialModule,
    CommonModule
  ],
  declarations: [FoldersComponent],
  exports: [FoldersComponent],
  providers: [FoldersService]
})
export class FoldersModule { }
