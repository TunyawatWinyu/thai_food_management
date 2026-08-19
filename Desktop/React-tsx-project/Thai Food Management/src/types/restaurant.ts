export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  vatNumber: string;
  openingHours: {
    open: string;
    close: string;
  };
}
