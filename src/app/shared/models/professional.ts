import { ProfessionalAddress } from './professional-address';
import { ProfessionalContact } from './professional-contact';

export interface Professional {
    id: number;
    speciality: string;
    name: string;
    description: string;
    person_type: string;
    email: string;
    work_experience: string;
    gender: string;
    date_birth: string;
    doc: string;
    professional_photo: null;
    license: string;
    is_active: boolean;
    address: ProfessionalAddress;
    contact: ProfessionalContact[];
}
