import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Separator } from "@/components/ui/separator";
import ImagePicker from "@/components/ImagePicker";
import { submitMeal } from "@/app/lib/actions";
import MealsFormSubmit from "@/components/meals-form-submit";

export default function ShareMealPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
          Share Your Favorite Meal
        </h1>
        <p className="font-nunito text-gray-600">
          Let the community know about your delicious recipes!
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="p-6">
          <h2 className="text-2xl font-poppins font-semibold">
            Meal Information
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6" action={submitMeal}>
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <Separator />

            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Enter meal title"
                required
              />
            </div>

            <Separator />

            <div>
              <Label htmlFor="summary">Short Summary</Label>
              <Textarea
                id="summary"
                rows={3}
                placeholder="Provide a short summary of the meal"
                required
                name="summary"
              />
            </div>

            <Separator />

            <div>
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea
                id="instructions"
                name="instructions"
                rows={6}
                placeholder="Detail the instructions for preparing the meal"
                required
              />
            </div>

            <ImagePicker label="Your Image" name="image" />
            <div className="text-center">
                <MealsFormSubmit />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
