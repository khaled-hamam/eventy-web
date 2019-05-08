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
  public name: string | undefined;
  public description: string | undefined;
  public date: Date | undefined;
  public location: ILocation | undefined;
  public type: string | undefined;
  public budget: number | undefined;
  public attendeesLimit: number | undefined;
  public eventOptions: EventOptions[] | undefined;
}
