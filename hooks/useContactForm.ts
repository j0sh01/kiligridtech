import { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  service: string;
  brief: string;
};

export const useContactForm = (translations: any) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    brief: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = translations.contact_error_name_required || 'Name is required';
    if (!formData.email.trim()) newErrors.email = translations.contact_error_email_required || 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = translations.contact_error_email_invalid || 'Email is invalid';
    if (!formData.service.trim()) newErrors.service = translations.contact_error_service_required || 'Service is required';
    if (!formData.brief.trim()) newErrors.brief = translations.contact_error_brief_required || 'Brief is required';
    else if (formData.brief.length < 10) newErrors.brief = translations.contact_error_brief_short || 'Brief must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (callback?: () => void) => {
    if (!validate()) return;
    setSubmitting(true);

    try {
      // Here you can integrate your API call, e.g., send to server
      // For now, we simulate a delay
      await new Promise(res => setTimeout(res, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', service: '', brief: '' });
      if (callback) callback();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    submitting,
    success,
    handleChange,
    handleSubmit,
    setSuccess
  };
};
