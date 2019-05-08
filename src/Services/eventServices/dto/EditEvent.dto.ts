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
  public name: string | undefined;
  public description: string | undefined;
  public location: ILocation | undefined;
  public budget: number | undefined;
  public attendeesLimit: number | undefined;
  public eventOptions: EventOptions[] | undefined;
}
