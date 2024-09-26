import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"


export default function MealsCard({ meals }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {meals.map((meal) => (
        <Card
          key={meal.id}
          className="hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <CardHeader className="p-0 relative">
            <Image
              src={meal.image}
              alt={meal.title}
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-56"
            />
          </CardHeader>

          <CardContent className="p-4">
            
            <CardTitle className="text-2xl font-bold mb-2">
              {meal.title}
            </CardTitle>
            <Separator className="my-4" />

            <p className="text-gray-600 italic">by {meal.creator}</p>
            <p className="text-gray-600 mb-4 mt-4">{meal.summary}</p>
          </CardContent>
          <CardFooter className="p-4 flex justify-between items-center">
            <Button
              asChild
              className="text-white bg-orange-600 flex items-center"
            >
              <Link href={`/meals/${meal.slug}`} className="flex items-center">
                Go to details
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
