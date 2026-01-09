type ToastOptions = {
  title: string;
  description?: string;
};

export const useToast = () => {
  const toast = ({ title, description }: ToastOptions) => {
    alert(`${title}\n\n${description ?? ''}`);
  };
  return { toast };
};
