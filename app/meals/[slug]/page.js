// app/meals/[slug]/page.jsx

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getMeal } from "@/app/lib/meals";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if(!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/meals">
        <Button variant="outline" className="flex items-center mb-8">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Meals
        </Button>
      </Link>

      <Card className="mb-12 shadow-lg">
        <CardHeader className="p-0">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={meal.image}
              alt={meal.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              priority
            />
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Separator className="my-6" />

          <CardTitle className="text-4xl font-bold mb-4 text-center">
            {meal.title}
          </CardTitle>

          <p className="text-gray-700 italic mb-6 text-center">
            {meal.summary}
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <p
                dangerouslySetInnerHTML={{
                  __html: meal.instructions,
                }}
                className="space-y-2 text-md"
              ></p>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 shadow-md">
        <CardContent className="p-6 flex items-center">
          <Avatar className="mr-4">
            <AvatarImage src={meal.creator_avatar} alt={meal.creator} />
            <AvatarFallback>{meal.creator.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{meal.creator}</h3>
            <a
              href={`mailto:${meal.creator_email}`}
              className="text-gray-600 hover:underline"
            >
              {meal.creator_email}
            </a>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Button className="flex items-center bg-zinc-200 hover:bg-zinc-100">
          <Heart className="h-5 w-5 mr-2 text-red-500" />
          Add to Favorites
        </Button>
        <Button className="flex items-center bg-zinc-200 hover:bg-zinc-100">
          <Share2 className="h-5 w-5 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}
