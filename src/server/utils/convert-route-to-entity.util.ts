const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  experiences: 'experience',
  interviews: 'interview',
  'job-postings': 'job_posting',
  qualifications: 'qualification',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
