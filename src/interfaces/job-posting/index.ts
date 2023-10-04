import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
