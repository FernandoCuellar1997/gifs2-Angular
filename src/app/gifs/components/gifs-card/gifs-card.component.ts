import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './gifs-card.component.html',
  styles: ``
})
export class GifsCardComponent {

  @Input()
  public gifList:Gif[]=[];

}
