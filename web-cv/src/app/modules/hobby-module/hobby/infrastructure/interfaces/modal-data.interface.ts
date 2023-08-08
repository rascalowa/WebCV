import { Hobby } from '../enums/hobby.enum';

export interface HobbyData {
  hobby: Hobby;
  photoUrl: string | undefined;
  description: string;
}
