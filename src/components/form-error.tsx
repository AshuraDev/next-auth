import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 flex items-center p-3 rounded-sm text-sm text-destructive gap-x-2">
      <TriangleAlert className="h-4 w-4" /> {message}
    </div>
  );
};
