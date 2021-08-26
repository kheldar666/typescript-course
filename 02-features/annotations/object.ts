const profile = {
  name: "Martin",
  age: 46,
  cords: {
    lat: 0,
    lng: 45,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  cords: { lat, lng },
}: { cords: { lat: number; lng: number } } = profile;
