import {Step} from './step.model';

export class Tour {
  id?: number;
  name?: string;
  description?: string;
  duration?: string;
  steps?: Step[];
}
