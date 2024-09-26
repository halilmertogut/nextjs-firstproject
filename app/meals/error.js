"use client"
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({ message = "Error while fetching data." }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-6" />
      <h1 className="text-3xl font-bold text-red-700 mb-4">Error!</h1>
      <p className="text-lg text-red-600 mb-8">{message}</p>
      <Link href="/meals">
        <Button className="bg-red-600 text-white hover:bg-red-700">
          Try Again
        </Button>
      </Link>
    </div>
  );
}
