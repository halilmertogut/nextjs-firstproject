import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgImage from '@/assets/burger.jpg';

export default function Hero() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={bgImage}
            alt="Delicious Food"
            width={600}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to NextLevel Food
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover delicious meals delivered to your doorstep. Enjoy fresh ingredients and expert cooking without leaving your home.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

