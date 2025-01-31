import { TriangleAlert } from "lucide-react";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Ooops somethings went wrong!"
      showSocial={false}
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="text-destructive w-16 h-16" />
      </div>
    </CardWrapper>
  );
};
