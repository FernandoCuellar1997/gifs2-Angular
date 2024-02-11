import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  constructor(private http:HttpClient) {
    this.loadLocalStorage()
  }

  public gifsList:Gif[]=[];
  private _tagsHistory:string[]=[];
  private api_key:string='VlZrBj9YkXgie7fnW5uPrkddOw6ZUbgX';
  private serviceUrl:string='https://api.giphy.com/v1/gifs';

  get tagsHistory():string[]{
    return [...this._tagsHistory];
  }

  checkTag(tagCheck:string):void{
    tagCheck=tagCheck.toLowerCase()

    if(this._tagsHistory.includes(tagCheck)){
      this._tagsHistory=this._tagsHistory.filter(tag=>tag!==tagCheck);
    }
    this._tagsHistory.unshift(tagCheck.toLowerCase());
    this._tagsHistory=this._tagsHistory.splice(0,10);
  }


  private safeLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history'))return;
    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length===0) return
    this.saveTag(this._tagsHistory[0]);
  }

  saveTag(newTag:string):void{
    if(!newTag)return;
    this.checkTag(newTag);

    const params=new HttpParams()
      .set('api_key',this.api_key)
      .set('limit','10')
      .set('q',newTag)
    /* fetch('https://api.giphy.com/v1/gifs/search?api_key=VlZrBj9YkXgie7fnW5uPrkddOw6ZUbgX&q=Vegeta&limit=10')
    .then(resp=>resp.json())
    .then(data=>console.log(data)); */
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe((resp)=>{
      this.gifsList=resp.data;
    });
    this.safeLocalStorage();

  }
}
