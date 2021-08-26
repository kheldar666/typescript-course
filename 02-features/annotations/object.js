var profile = {
    name: "Martin",
    age: 46,
    cords: {
        lat: 0,
        lng: 45
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.cords, lat = _a.lat, lng = _a.lng;
