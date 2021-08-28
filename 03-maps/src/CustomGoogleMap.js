"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGoogleMap = void 0;
/// <reference types="@types/google.maps" />
var Marker = google.maps.Marker;
var CustomGoogleMap = /** @class */ (function () {
    function CustomGoogleMap(divId, options) {
        if (!options) {
            options = {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            };
        }
        this.googleMap = new google.maps.Map(document.getElementById(divId), options);
    }
    CustomGoogleMap.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        marker.addListener("click", function () {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomGoogleMap;
}());
exports.CustomGoogleMap = CustomGoogleMap;
