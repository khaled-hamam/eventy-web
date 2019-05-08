export interface ILocation {
  latitude: string;
  longitude: string;
}
export enum EventOptions {
  DJ,
  Photographer,
  Decoration,
  Catering,
}
export class EditEventDTO {
  public name: string;
  public description: string;
  public location: ILocation;
  public budget: number;
  public attendeesLimit: number;
  public eventOptions: EventOptions[];
}
