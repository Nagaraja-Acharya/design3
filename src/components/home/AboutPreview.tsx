import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPreview() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sun-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />

      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Where Every Step Counts"
              align="left"
            />
            
            <div className="mt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Rishab Shetty Foundation was born from a deep belief that 
                <span className="text-earth-brown font-medium"> language is identity</span>, 
                and education is the bridge to opportunity. Rooted in the rich soil of 
                Karnataka's villages, we work to preserve Kannada medium education while 
                empowering children to dream beyond their horizons.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a personal commitment has grown into a movement — 
                touching schools, families, and entire communities across rural Karnataka.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-earth-brown">
                  <div className="w-2 h-2 rounded-full bg-sun-gold" />
                  <span className="font-medium">Kannada Medium Education</span>
                </div>
                <div className="flex items-center gap-2 text-earth-brown">
                  <div className="w-2 h-2 rounded-full bg-forest" />
                  <span className="font-medium">Children's Welfare</span>
                </div>
                <div className="flex items-center gap-2 text-earth-brown">
                  <div className="w-2 h-2 rounded-full bg-terracotta" />
                  <span className="font-medium">Community Development</span>
                </div>
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sun-gold hover:text-terracotta font-semibold mt-4 group"
              >
                Discover our journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Quote Card */}
            <div className="bg-earth-brown text-chalk p-8 md:p-12 rounded-2xl shadow-elevated relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sun-gold rounded-full flex items-center justify-center text-3xl font-serif text-primary-foreground">
                "
              </div>
              
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-6 pt-4">
                When I enrolled my own children in a Kannada medium school in Keradi, 
                it wasn't just a decision — it was a statement. That our language, 
                our roots, our culture are worth preserving.
              </blockquote>
              
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sun-gold/30 flex items-center justify-center">
                  <span className="font-serif text-xl text-sun-gold-light">RS</span>
                </div>
                <div>
                  <cite className="not-italic font-semibold text-chalk">Rishab Shetty</cite>
                  <p className="text-chalk/70 text-sm">Founder</p>
                </div>
              </footer>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta-light/30 organic-blob -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
