// pages/community.js

import { Button } from "@/components/ui/button";
import Image from "next/image";
import firstPerk from '@/assets/icons/community.png';
import secondPerk from '@/assets/icons/events.png';
import thirdPerk from '@/assets/icons/meal.png';
import hero from '@/assets/pizza.jpg';

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-5xl font-bold mb-6">Join Our Foodies Community</h1>
            <p className="text-lg mb-6">
              Connect with fellow food lovers, share recipes, and explore new culinary experiences.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg"
            >
              Sign Up Now
            </Button>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={hero}
              alt="Community of Food Lovers"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perks of Joining</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: firstPerk, // Removed curly braces here
                title: "Exclusive Recipes",
                description: "Access to members-only recipes and cooking tips.",
              },
              {
                id: 2,
                image: secondPerk,
                title: "Community Events",
                description: "Participate in local and online food events.",
              },
              {
                id: 3,
                image: thirdPerk,
                title: "Networking Opportunities",
                description: "Connect with chefs and fellow food enthusiasts.",
              },
            ].map((perk) => (
              <div key={perk.id} className="text-center">
                <Image
                  src={perk.image}
                  alt={perk.title}
                  width={300}
                  height={200}
                  className="mx-auto mb-4 rounded-lg shadow-md"
                />
                <h3 className="text-2xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-lg mb-8">
            Become a part of our vibrant foodies community today!
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </>
  );
}
