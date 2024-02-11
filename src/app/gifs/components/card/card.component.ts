import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.gif)
    throw new Error('Giph property is required');
  }

  @Input()
  public gif!:Gif


}
