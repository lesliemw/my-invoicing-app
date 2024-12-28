"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`w-full font-semibold ${pending ? "disabled" : ""}`}
      type="submit"
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
