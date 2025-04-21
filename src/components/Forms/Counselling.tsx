import React from 'react';
import { MonochromeForm } from './TemplateForm';


export const StudentCounsellingForm: React.FC = () => (
  <MonochromeForm
    title="Student Counselling"
    fields={[
      { label: 'First Name', type: 'text' },
      { label: 'Last Name', type: 'text' },
      { label: 'Email Address', type: 'email' },
      { label: 'Phone Number', type: 'tel' },
      { label: 'Country of Residence', type: 'text' },
      { label: 'Current Education Level', type: 'text' },
      { label: 'Preferred Study Destination', type: 'text' },
      { label: 'What are your academic or personal goal?', type: 'textarea' },
      { label: 'What challenges are you facing in your study abroad journey?', type: 'textarea' },
      { label: 'Preferred Contact Method', type: 'select', options: ['Email', 'Phone', 'WhatsApp'] },
      { label: 'How did you hear about us?', type: 'text' },
    ]}
  />
);

export const CareerCounsellingForm: React.FC = () => (
  <MonochromeForm
    title="Career Counselling"
    fields={[
      { label: 'First Name', type: 'text' },
      { label: 'Last Name', type: 'text' },
      { label: 'Email Address', type: 'email' },
      { label: 'Phone Number', type: 'tel' },
      { label: 'Country of Residence', type: 'text' },
      { label: 'Current Education Level', type: 'text' },
      { label: 'Field of Interest', type: 'text' },
      { label: 'What are your long-term career goals?', type: 'textarea' },
      { label: 'Do you have any work experience?', type: 'textarea' },
      { label: 'What specific career guidance are you seeking?', type: 'textarea' },
      { label: 'Preferred Study Destination', type: 'text' },
      { label: 'Preferred Contact Method', type: 'select', options: ['Email', 'Phone', 'WhatsApp'] },
      { label: 'How did you hear about us?', type: 'text' },
    ]}
  />
);