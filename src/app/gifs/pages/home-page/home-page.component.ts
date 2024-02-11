import { Component } from '@angular/core';
import { GifService } from '../../services/GifService.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

  constructor(private gifsService:GifService){

  }

  get gifs():Gif[]{
    return this.gifsService.gifsList;
  }
}
