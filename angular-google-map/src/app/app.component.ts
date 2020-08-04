import { Component } from '@angular/core';
import { MarkersService } from './markers.service';
import { Subscription } from 'rxjs';

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

  // public markers: {lat: number, lng: number}[];
  public markers: any;
  public markersServiceSubscr: Subscription;

  constructor(private markersService: MarkersService){
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

        this.markersService.addNewMarker(this.lat, this.lng).subscribe(data => {
          this.markers = data;
        });
      });
    }

    this.markersService.getMarkers().subscribe((data) => {
      this.markers = data;
    });
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
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.formattedaddress=address.formatted_address

    this.markersService.addNewMarker(this.lat, this.lng).subscribe(data => {
      this.markers = data;
    });
  }
}
