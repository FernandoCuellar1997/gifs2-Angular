import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/GifService.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifService){}

  searchTag():void{
    const newTag=this.tagInput.nativeElement.value;
    if(!newTag)return;
    this.gifsService.saveTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
