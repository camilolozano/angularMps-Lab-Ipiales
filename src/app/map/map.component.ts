import { Component } from '@angular/core';
import { Marker } from './shared/struct-marker';
import { MarkerService } from './shared/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})
export class MapComponent {
  // Nivel de zoom
  zoom = 10;
  // Posicion
  lat = 0.8243084198983799;
  lng = -77.64051266116304;

  markers: Marker[];

  constructor(markerService: MarkerService) {
    this.markers = markerService.getPoints();
  }

  clickedMarker(marker: Marker, index: number) {
    console.log(`clicked Marker ${marker.name} y el index ${index}`);
  }

  mapClicked($event: any) {
    console.log('Map Clicked');
    const newMarker = {
      name: 'Untitle',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false,
    };
    this.markers.push(newMarker);
  }
  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd' + marker, $event);

    let updMarker = {
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      draggable: false
    };

    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;
  }
}
