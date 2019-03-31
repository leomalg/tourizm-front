import {Moment} from 'moment';

export class Tour {
  id?: number;
  name?: string;
  description?: string;
  duration?: Moment;
  stepCount?: number;
  // steps?: Step[];
}
