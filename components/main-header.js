"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import logoIMG from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function MainHeader() {
    const path = usePathname();
  return (
    <header className="bg-black border-b border-gray-700">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={logoIMG}
            width={60}
            height={1}
            alt="NextLevel Food"
            priority
          />
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-orange-500"
          >
            NextLevel Food
          </Link>
        </div>

        <nav className="space-x-8 hidden md:flex">
          <Link
            href="/meals"
            className={`text-lg hover:text-orange-500 transition-colors duration-200 ${path === '/meals' ? 'text-orange-600' : 'text-white'}`}
            >
            Browse Meals
          </Link>
          <Link
            href="/community"
            className={`text-white text-lg hover:text-orange-500 transition-colors duration-200 ${path === '/community' ? 'text-orange-600' : 'text-white'}`}
            >
            Foodies Community
          </Link>
        </nav>

        <Button className="bg-orange-600 hover:bg-white text-white hover:text-black px-5 py-2 rounded-lg shadow-lg transition-all duration-200">
          Get Started
        </Button>
      </div>
    </header>
  );
}
