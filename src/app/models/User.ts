interface Localisation
{
  city: string;
  zipCode: string;
}
export interface User
{
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  role: string;
  isActive: boolean;
  id ?: number;
  localisation ?: Localisation;
}
