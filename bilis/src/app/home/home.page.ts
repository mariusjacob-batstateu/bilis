import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  destination: string[]=["des1", "des2","des3"]
  placeSearch: string=""

  constructor() {}

  addDestination(){
    this.destination.push(this.placeSearch)
    this.placeSearch=""
  }

}
