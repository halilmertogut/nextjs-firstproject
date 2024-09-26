import { Button } from "@/components/ui/button";
import { getMeals } from "../lib/meals";
import { Input } from "@/components/ui/input";
import MealsCard from "@/components/meals-card";
import { Suspense } from "react";
import LoadingPage from "./loading-out";
import { Share2 } from "lucide-react";
import Link from "next/link";
async function Meals() {
  const meals = await getMeals();
  return <MealsCard meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Delicious Meals</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our wide selection of meals crafted by expert chefs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Optional Filter Bar */}

          <div className="mb-8 flex flex-wrap items-center justify-between">
            <div className="flex space-x-4">
              <Button variant="outline" className="text-gray-600">
                All Meals
              </Button>
              <Button variant="outline" className="text-gray-600">
                Vegetarian
              </Button>
              <Button variant="outline" className="text-gray-600">
                Vegan
              </Button>
              <Button variant="outline" className="text-gray-600">
                Gluten-Free
              </Button>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button variant="outline" className="text-white bg-red-500 hover:bg-red-500/70"><Share2 className="mr-4"/><Link href="/meals/share">Share your meal!</Link></Button>
            </div>
            <div className="mt-4 sm:mt-0">
              <Input type="text" placeholder="Search.." />
            </div>
          </div>
          <Suspense fallback={<LoadingPage />}>
            <Meals />
          </Suspense>
        </div>
      </section>
    </>
  );
}
