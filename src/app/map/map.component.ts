import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // Nivel de zoom
  zoom = 10;
  // Posicion
  lat = 0.8243084198983799;
  lng = -77.64051266116304;
  // marcadores
  markers: Marker[] = [
    {
      name: 'Compañia_1',
      lat: 0.8242574632008068,
      lng: -77.64157213372393,
      draggable: true,
    },
    {
      name: 'Compañia_2',
      lat: 0.8241944378108004,
      lng: -77.64157615703745,
      draggable: true,
    },
    {
      name: 'Compañia_3',
      lat: 0.8240160893615913,
      lng: -77.64217395437164,
      draggable: true,
    }
  ];

  constructor() { }

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

// Tipo de marcador
interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
