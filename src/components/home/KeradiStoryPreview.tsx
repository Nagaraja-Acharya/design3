import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import keradiSchool from "@/assets/rishabshettyofficial_1768970464184.jpg";

export default function KeradiStoryPreview() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 bg-earth-brown relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="chalkLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chalkLines)" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={keradiSchool}
                alt="Keradi School - A traditional Karnataka village school building"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/40 to-transparent" />
            </div>
            
            {/* Year badge */}
            <div className="absolute -bottom-6 -left-6 bg-sun-gold text-primary-foreground px-6 py-4 rounded-xl shadow-warm">
              <span className="block text-3xl font-serif font-bold">2019</span>
              <span className="text-sm opacity-80">School Adoption</span>
            </div>

            {/* Floating organic shape */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta/30 organic-blob-2 blur-xl" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 text-chalk">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              From Reel to Real
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              The Story of 
              <span className="text-sun-gold-light block">Keradi School</span>
            </h2>

            <div className="space-y-5 text-chalk/85 text-lg leading-relaxed">
              <p>
                In the quiet village of Keradi, a small government school stood at a crossroads. 
                With dwindling enrollment and fading hope, it was on the verge of closure.
              </p>
              <p>
                Then came a choice that would change everything. Rishab Shetty didn't just 
                support the school — he enrolled his own children there, sending a powerful 
                message about faith in Kannada medium education.
              </p>
              <p className="font-medium text-chalk">
                Today, Keradi School stands as a beacon of what's possible when belief 
                meets action.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 mb-10">
              <div>
                <span className="block text-4xl font-serif font-bold text-sun-gold">150+</span>
                <span className="text-chalk/70 text-sm">Students Enrolled</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-sun-gold">12</span>
                <span className="text-chalk/70 text-sm">New Teachers</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-sun-gold">100%</span>
                <span className="text-chalk/70 text-sm">Community Support</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground shadow-warm group"
            >
              <Link to="/keradi-story">
                Read the Full Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Kannada text decoration */}
      <div className="absolute bottom-8 left-8 text-6xl text-chalk/5 font-serif">
        ಕೆರಾಡಿ
      </div>
    </section>
  );
}
