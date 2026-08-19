import type { Restaurant } from "../types/restaurant";

export const restaurant: Restaurant = {
  id: 1,
  name: "Thai Food Milano",
  address: "Milano, Italia",
  phone: "+39 02 1234567",
  email: "info@thaifood.it",
  vatNumber: "IT12345678901",
  openingHours: {
    open: "11:30",
    close: "22:30",
  },
};
