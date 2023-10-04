interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Recruiter', 'Job Seeker', 'Hiring Manager', 'Admin', 'HR Specialist'],
  tenantName: 'Company',
  applicationName: 'Recruiting',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage application', 'Read job_posting', 'Read company', 'Manage user'],
  ownerAbilities: [
    'Manage experience data',
    'Manage qualification data',
    'Manage interview data',
    'Manage job postings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/582b9689-ea48-4d1b-9c4b-5fe404800ae4',
};
