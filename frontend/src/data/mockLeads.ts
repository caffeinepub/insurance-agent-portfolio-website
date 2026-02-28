export type LeadStatus = 'New' | 'Called' | 'Won';
export type PolicyType = 'Auto' | 'Home' | 'Life' | 'Commercial';

export interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  policy: PolicyType;
  status: LeadStatus;
  date: string;
}

export const mockLeads: Lead[] = [
  { id: 1, name: 'James Anderson', phone: '936-441-2301', email: 'james.anderson@gmail.com', policy: 'Auto', status: 'New', date: 'Today' },
  { id: 2, name: 'Maria Rodriguez', phone: '936-552-8847', email: 'maria.rodriguez@yahoo.com', policy: 'Home', status: 'Called', date: 'Yesterday' },
  { id: 3, name: 'Robert Thompson', phone: '936-663-1192', email: 'rthompson@hotmail.com', policy: 'Life', status: 'Won', date: '2 days ago' },
  { id: 4, name: 'Jennifer Williams', phone: '936-774-5563', email: 'jwilliams@gmail.com', policy: 'Auto', status: 'New', date: 'Today' },
  { id: 5, name: 'Michael Davis', phone: '936-885-9934', email: 'mdavis@outlook.com', policy: 'Commercial', status: 'Called', date: '3 days ago' },
  { id: 6, name: 'Patricia Martinez', phone: '936-221-4478', email: 'pmartinez@gmail.com', policy: 'Home', status: 'New', date: 'Today' },
  { id: 7, name: 'David Johnson', phone: '936-332-7712', email: 'djohnson@yahoo.com', policy: 'Life', status: 'Won', date: '4 days ago' },
  { id: 8, name: 'Linda Garcia', phone: '936-443-6651', email: 'lgarcia@gmail.com', policy: 'Auto', status: 'Called', date: '2 days ago' },
  { id: 9, name: 'Christopher Wilson', phone: '936-554-3389', email: 'cwilson@hotmail.com', policy: 'Home', status: 'New', date: 'Yesterday' },
  { id: 10, name: 'Barbara Taylor', phone: '936-665-8823', email: 'btaylor@gmail.com', policy: 'Commercial', status: 'Won', date: '5 days ago' },
  { id: 11, name: 'Kevin Brown', phone: '936-776-2245', email: 'kbrown@outlook.com', policy: 'Auto', status: 'New', date: 'Today' },
  { id: 12, name: 'Susan Hernandez', phone: '936-887-9967', email: 'shernandez@gmail.com', policy: 'Life', status: 'Called', date: '3 days ago' },
];
