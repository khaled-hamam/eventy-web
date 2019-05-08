import { CreatorProfileDTO } from './creatorProfile.dto';
export interface PlannerProfileDTO extends CreatorProfileDTO {
  rating?: number;
  pendingRequests?: Request[];
}
