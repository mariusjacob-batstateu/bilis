import { Component } from '@angular/core';
import { HereApiService } from '../services/here-api.service';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@awesome-cordova-plugins/native-geocoder';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  destination: string[]=["aDes1", "aDes2","aDes3"]
  placeSearch: string=""
  queryResult: any;
  searchContent: boolean=false

  options: NativeGeocoderOptions= {
    useLocale:true,
    maxResults: 5
  }
  geoAddress: any
  userCoords: { [key: string]: any } = {};

  constructor(
    private hereApi:HereApiService,
  ) {

    this.getCurrentLocation()
  }

  addDestination(){
    this.destination.push(this.placeSearch)
    this.placeSearch=""
  }

  searchPlace(){
    this.hereApi.autoSuggestgetResult(this.placeSearch, this.userCoords['lat'], this.userCoords['long']).subscribe(data => {
      this.queryResult = data.items;
    });
    this.searchContent=true
    this.getCurrentLocation()
  }
  async getCurrentLocation() {
    const location= await Geolocation.getCurrentPosition();
    this.userCoords['lat']=location.coords.latitude
    this.userCoords['long']=location.coords.longitude

    // NativeGeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.options).then((
    //   result: NativeGeocoderResult[])=>{
    //     console.log('result= ', result)
    //     console.log('result 0 = ', result[0])

    //     this.geoAddress= this.generateAddress(result[0])
    //     console.log('location address= ', this.geoAddress.coords)
    //   })
  }
}
