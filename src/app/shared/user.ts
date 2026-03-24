export interface User {
  prenom: string;
  nom: string;
  age: number;
  os: 'Windows' | 'MacOS' | 'Linux';
  present: boolean;
}
