import React from 'react';
import { MonochromeForm } from './TemplateForm';


export const AdmissionForm: React.FC = () => (
  <MonochromeForm
    title="Admission Application Form"
    fields={[
      { label: 'Full Name', type: 'text' },
      { label: 'Email Address', type: 'email' },
      { label: 'Phone Number', type: 'tel' },
      { label: 'Country of Residence', type: 'text' },
      { label: 'Current Education Level', type: 'text' },
      { label: 'Preferred Study Destination', type: 'text' },
      { label: 'Intended Level of Study', type: 'text' },
      { label: 'Field of Study', type: 'text' },
      { label: 'What courses or programs are you interested in?', type: 'textarea' },
      { label: 'Academic Background', type: 'textarea' },
      { label: 'Standardized Test Scores if available.', type: 'textarea' },
      { label: 'What are your budget constraints for tuition and living expenses?', type: 'textarea' },
      { label: 'Preferred Intake', type: 'text' },
      { label: 'What specific admission support do you need?', type: 'textarea' },
      { label: 'Preferred Contact Method', type: 'select', options: ['Email', 'Phone', 'WhatsApp'] },
      { label: 'How did you hear about us?', type: 'text' },
    ]}
  />
);



export const VisaAssistanceForm: React.FC = () => (
    <MonochromeForm
      title="Visa Assistance Application Form"
      fields={[
        { label: 'Full Name', type: 'text' },
        { label: 'Email Address', type: 'email' },
        { label: 'Phone Number', type: 'tel' },
        { label: 'Country of Residence', type: 'text' },
        { label: 'Nationality', type: 'text' },
        { label: 'Preferred Study Destination', type: 'text' },
        { label: 'Intended Level of Study', type: 'text' },
        { label: 'Have you received an admission offer?', type: 'text' },
        { label: 'What type of visa are you applying for?', type: 'text' },
        { label: 'Do you have any previous visa rejections?', type: 'textarea' },
        { label: 'If yes, explain', type: 'textarea' },
        { label: 'What specific visa support do you need? E.g., document checklist, interview preparation', type: 'textarea' },
        { label: 'Preferred Contact Method', type: 'select', options: ['Email', 'Phone', 'WhatsApp'] },
        { label: 'How did you hear about us?', type: 'text' },
      ]}
    />
);

  
export const AccomodationAssistanceForm: React.FC = () => (
    <MonochromeForm
      title="Accomodation Assistance Application Form"
      fields={[
        { label: 'Full Name', type: 'text' },
        { label: 'Email Address', type: 'email' },
        { label: 'Phone Number', type: 'tel' },
        { label: 'Country of Residence', type: 'text' },
        { label: 'Preferred Accomodation Type', type: 'text' },
        { label: 'Institution Name and City ', type: 'textarea' },
        { label: 'Budget for Accommodation', type: 'text' },
        { label: 'Move-In Date', type: 'date' },
        { label: 'Any specific accommodation needs?', type: 'textarea' },
        { label: 'Preferred Contact Method', type: 'select', options: ['Email', 'Phone', 'WhatsApp'] },
        { label: 'How did you hear about us?', type: 'text' },
      ]}
    />
);