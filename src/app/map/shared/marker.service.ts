import { Injectable } from '@angular/core';

import { Marker } from './struct-marker';
import { POINTS } from './marker-data';

@Injectable()
export class MarkerService {
  getPoints(): Marker[] {
    return POINTS;
  }
}
