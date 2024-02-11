import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/GifService.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifService){}

  get gifsHistory():string[]{
    return [...this.gifsService.tagsHistory];
  }

  buscarTag(tag:string):void{
    this.gifsService.saveTag(tag);
  }
}
