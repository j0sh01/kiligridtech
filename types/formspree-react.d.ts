declare module '@formspree/react' {
  import * as React from 'react';

  export function useForm(formKey: string): [
    {
      errors?: Array<{ field: string; message: string }>;
      succeeded: boolean;
      submitting: boolean;
    },
    (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  ];

  export const ValidationError: React.FC<{
    prefix?: string;
    field: string;
    errors?: Array<{ field: string; message: string }>;
    className?: string;
  }>;
}
