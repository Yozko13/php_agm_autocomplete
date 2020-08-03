import { Component } from '@angular/core';
import { MarkersService } from './markers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  zoom: number = 14;
  lat:any;
  lng:any;

  public markers: {lat: number, lng: number}[];

  constructor(private markersService: MarkersService){
    console.log(markersService.getMarkers());
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    this.markers = [
      { lat: 42.1199133, lng: 24.7936975 },
      { lat: 42.1299133, lng: 24.7836975 },
      { lat: 42.1399133, lng: 24.7736975 },
      { lat: 42.1499133, lng: 24.7636975 },
    ];

    // this.markers = this.markersService.getMarkers();
  }

  //Local Variable defined
  formattedaddress=" ";
  options={
    componentRestrictions:{
      country:["BG"]
    }
  }
  public AddressChange(address: any) {
    //setting address from API to local variable
    this.zoom = 15;
    this.lng = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();
    this.formattedaddress=address.formatted_address
  }
}
