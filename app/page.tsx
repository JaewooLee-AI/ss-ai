import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* 
        Below we can add other sections in the future:
        <FeaturesSection />
        <TestimonialsSection />
      */}
    </div>
  );
}
