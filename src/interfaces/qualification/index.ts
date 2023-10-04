import { GetQueryInterface } from 'interfaces';

export interface QualificationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface QualificationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
