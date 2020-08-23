import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FoldersModule } from '../folders/folders.module';
import { DirectoryComponent } from './directory.component';
import { DirectoryRouting } from './directory-routing.module';
import { CommonModule } from '@angular/common';
import { FoldersService } from '../folders/folders.service';

@NgModule({
  imports: [
    DirectoryRouting,
    FoldersModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [DirectoryComponent],
  exports: [DirectoryComponent],
  providers: [FoldersService]
})
export class DirectoryModule { }
