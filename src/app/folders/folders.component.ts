import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FoldersService } from './folders.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})

export class FoldersComponent implements OnInit {
  /*folders:any = [
    {
      text: "folder 1",
      folders: [
        {
          text: "folder 1.1",
          folders: [
            {
              text: "folder 1.1.1 "
            }
          ]
        },
        {
          text: "folder 1.2",
          folders: [
            {
              text: "folder 1.2.1"
            }
          ]
        },
        {
          text: "folder 1.3",
          folders: [
            {
              text: "folder 1.3.1"
            },
            {
              text: "folder 1.3.2"
            }
          ],
        }
      ]
    },
    {
      text: "2",
      folders: [
        {
          text: "folder 2.1",
          folders: [
            {
              text: "folder 2.1.1"
            }
          ]
        }
      ]
    }
  ];*/
  constructor(private foldersService: FoldersService) { }
  title = 'folder';

  @Input() folders;

  ngOnInit(): void {
  }

   getFolderName(value: string): void {
      this.foldersService.folderName.next(value);
   }
}
