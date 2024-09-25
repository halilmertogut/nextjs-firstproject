import Link from "next/link";
import MainHeader from "@/components/main-header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyChooseUs from "@/components/why-us";
export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
    </main>
  );
}
