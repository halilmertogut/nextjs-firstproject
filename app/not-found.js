import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <AlertTriangle className="h-24 w-24 text-red-500 mb-6" />

      <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>

      <p className="text-center text-gray-600 mb-8">
        The page you are looking for does not exist or has been moved. Please
        choose one of the options below to continue.
      </p>

      <div className="flex items-center mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for pages..."
          className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        <Button variant="destructive" className="rounded-l-none text-white h-10 ml-2">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex space-x-4">
        <Link href="/">
          <Button className="bg-orange-600 text-white hover:bg-orange-700">
            Go Home
          </Button>
        </Link>

        <Link href="/meals">
          <Button
            variant="outline"
            className="text-orange-600 border-orange-600 hover:bg-orange-100"
          >
            Browse Meals
          </Button>
        </Link>
      </div>
    </div>
  );
}
