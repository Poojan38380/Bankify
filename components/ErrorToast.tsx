import { toast } from "./ui/use-toast";

const ErrorToast = (error: string) => {
  toast({
    variant: "destructive",
    title: "Error",
    description: error,
  });
};

export default ErrorToast;
