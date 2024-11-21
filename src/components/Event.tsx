export type Event = {
  name: string;
  id: number;
  url: string;
  images: { url: string; width: number; height: number }[];
  dates: { start: { localDate: string; localTime: string } };
  _embedded: {
    venues: {
      name: string;
      url: string; // URL of the venue
      type: string;
      id: string;
      city: {
        name: string; // City is an object with a name property
      };
    }[];
  };
};
