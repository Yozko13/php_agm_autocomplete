import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  apiUrl: string = 'http://agm.local/be-server/routes'; // You Back End Server domain
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Markers
  getMarkers() {
    return this.http.get(this.apiUrl +'/get_markers.php');
  }

  // Add New Marker
  addNewMarker(lat, lng): Observable<any> {
    let API_URL = this.apiUrl +'/set_new_coordinates.php';
    const postHeaders = {'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  
    const body=JSON.stringify({"lat": lat, "lng": lng});

    return this.http.post(API_URL, body,{ headers: postHeaders })
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
