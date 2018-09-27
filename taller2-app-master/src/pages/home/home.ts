import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public lat:number;
  public lng:number;
  
  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

  }
    
  ngAfterViewInit(){
    this.geolocal();
  }
  geolocal(){
    this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{
      
      this.lat=geoposition.coords.latitude;
      this.lng=geoposition.coords.longitude;
      console.log(this.lat,this.lng);
    }) 
  }
  
}
