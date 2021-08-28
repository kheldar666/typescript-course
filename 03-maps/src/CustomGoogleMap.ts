/// <reference types="@types/google.maps" />
import Marker = google.maps.Marker;

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomGoogleMap {
  private readonly googleMap: google.maps.Map;

  constructor(divId: string, options?: google.maps.MapOptions) {
    if (!options) {
      options = {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      };
    }
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as Element,
      options
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
