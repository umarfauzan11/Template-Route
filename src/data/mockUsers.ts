export interface MockUser {
  id: string;
  name: string;
  role: string;
  email: string;
}

export const mockUsers: MockUser[] = [
  { id: '1', name: 'Alex Johnson', role: 'Frontend Engineer', email: 'alex@example.com' },
  { id: '2', name: 'Sarah Miller', role: 'UI/UX Designer', email: 'sarah@example.com' },
  { id: '3', name: 'Michael Chen', role: 'Fullstack Developer', email: 'michael@example.com' },
  { id: '4', name: 'Jessica Davis', role: 'Product Manager', email: 'jessica@example.com' },
];
