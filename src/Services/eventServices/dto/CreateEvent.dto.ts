export enum EventOptions {
  DJ,
  Photographer,
  Decoration,
  Catering,
}

export interface ILocation {
  latitude: string;
  longitude: string;
}

export class CreateEventDTO {
  public name: string;
  public description: string;
  public date: Date;
  public location: ILocation;
  public type: string;
  public budget: number;
  public attendeesLimit: number;
  public eventOptions: EventOptions[];
}
