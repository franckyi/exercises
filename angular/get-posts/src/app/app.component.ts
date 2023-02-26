import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
// import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'get-posts';
  public listOfPosts: any = [];
  // creo una variabile per ospitare i dati dell'API

  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    // la chiamata parte da qui
    this._appService.getPosts().subscribe( posts => {
      this.listOfPosts = posts;
      // console.log(this.listOfPosts);
      // a listOfPosts assegno i dati ottenuti dall'API
    })
    // getPosts() restituisce un Observable
    // subscribe() restituisce i dati (posts in questo caso)
  }

}
