import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FoldersService {

  folderName = new BehaviorSubject<string>(null);

  constructor() { }

}
