// components/HowItWorks.jsx

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
  } from "@/components/ui/card";
  import { Icon } from "@iconify/react";
  
  export default function HowItWorks() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Icon
                    icon="mdi:food-fork-drink"
                    className="h-12 w-12 text-orange-600"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold">
                  Choose Your Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Browse our menu and select from a variety of delicious meals.
                </CardDescription>
              </CardContent>
            </Card>
  
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Icon
                    icon="mdi:cart-outline"
                    className="h-12 w-12 text-orange-600"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold">
                  Place Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Easily place your order online with a few clicks.
                </CardDescription>
              </CardContent>
            </Card>
  
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <Icon
                    icon="mdi:truck-delivery-outline"
                    className="h-12 w-12 text-orange-600"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold">
                  Enjoy Your Meal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Sit back and relax while we deliver fresh meals to your doorstep.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  