export type Event = {
  name: string;
  id: number;
  url: string;
  images: { url: string; width: number; height: number }[];
  dates: { start: { localDate: string; localTime: string } };
  _embedded: {
    venues: {
      url: string; // URL of the venue
      type: string;
      id: string;
    }[]; // Venues array is directly under _embedded
  };
};

