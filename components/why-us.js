import Image from "next/image";
import { CheckCircle } from "lucide-react";
import whyIMG from '@/assets/macncheese.jpg';
export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={whyIMG}
              alt="Delicious Food"
              width={600}
              height={100}
              quality={100}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <ul className="space-y-6">
              {[
                {
                  title: "Fresh Ingredients",
                  description: "We use only the freshest ingredients in our meals.",
                },
                {
                  title: "Expert Chefs",
                  description: "Our chefs are highly trained and experienced.",
                },
                {
                  title: "Fast Delivery",
                  description: "Enjoy your meals delivered promptly to your doorstep.",
                },
                {
                  title: "Affordable Prices",
                  description: "Delicious meals at prices you'll love.",
                },
              ].map((item) => (
                <li key={item.title} className="flex">
                  <CheckCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
