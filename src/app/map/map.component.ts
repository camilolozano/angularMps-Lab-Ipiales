import { Component } from '@angular/core';
import { Marker } from './shared/struct-marker';
import { MarkerService } from './shared/marker.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})
export class MapComponent {
  // Nivel de zoom
  zoom = 15;
  // Posicion
  lat = 0.8243084198983799;
  lng = -77.64051266116304;

  markers: Marker[];

  items: FirebaseListObservable<any[]>;

  constructor(
    markerService: MarkerService,
    af: AngularFire
    ) {
    this.items = af.database.list('/points');
    // this.markers = markerService.getPoints();
  }

  clickedMarker(marker: Marker, index: number) {
    console.log(`clicked Marker ${marker.name} y el index ${index}`);
  }

  mapClicked($event: any) {
    console.log('Map Clicked');
    const newMarker = {
      name: 'Nombre',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    };
    // this.markers.push(newMarker);
    this.items.push(newMarker);
  }
}
