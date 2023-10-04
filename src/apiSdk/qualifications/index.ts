import queryString from 'query-string';
import { QualificationInterface, QualificationGetQueryInterface } from 'interfaces/qualification';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQualifications = async (
  query?: QualificationGetQueryInterface,
): Promise<PaginatedInterface<QualificationInterface>> => {
  return fetcher('/api/qualifications', {}, query);
};

export const createQualification = async (qualification: QualificationInterface) => {
  return fetcher('/api/qualifications', { method: 'POST', body: JSON.stringify(qualification) });
};

export const updateQualificationById = async (id: string, qualification: QualificationInterface) => {
  return fetcher(`/api/qualifications/${id}`, { method: 'PUT', body: JSON.stringify(qualification) });
};

export const getQualificationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/qualifications/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteQualificationById = async (id: string) => {
  return fetcher(`/api/qualifications/${id}`, { method: 'DELETE' });
};
