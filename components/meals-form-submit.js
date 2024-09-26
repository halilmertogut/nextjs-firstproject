"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full md:w-auto px-8 py-3 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit Meal'}
    </Button>
  );
}
