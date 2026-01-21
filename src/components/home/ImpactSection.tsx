import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const impactStats = [
  { number: "5,000+", label: "Students Impacted", color: "sun-gold" },
  { number: "15", label: "Schools Supported", color: "terracotta" },
  { number: "20+", label: "Villages Reached", color: "forest" },
  { number: "100+", label: "Teachers Trained", color: "earth-brown-light" },
];

const testimonials = [
  {
    quote: "My daughter now dreams of becoming a teacher — in Kannada. That's the change we never thought possible.",
    name: "Lakshmi Devadiga",
    role: "Parent, Keradi Village",
  },
  {
    quote: "The foundation didn't just renovate our school. They gave us hope that our children can learn in their mother tongue and still succeed.",
    name: "Nagaraj Poojary",
    role: "Headmaster, Govt. School",
  },
];

export default function ImpactSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 bg-chalk-warm relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sun-gold/30 to-transparent" />
      
      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeading
          eyebrow="Our Impact"
          title="Stories Written in Action"
          description="Every number represents a life touched, a future brightened, a community strengthened."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl shadow-soft border border-border/50 hover:shadow-warm transition-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span 
                className={`block text-4xl md:text-5xl font-serif font-bold mb-2 ${
                  stat.color === 'sun-gold' ? 'text-sun-gold' :
                  stat.color === 'terracotta' ? 'text-terracotta' :
                  stat.color === 'forest' ? 'text-forest' : 'text-earth-brown-light'
                }`}
              >
                {stat.number}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card p-8 rounded-2xl shadow-soft border border-border/50"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sun-gold/20" />
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sun-gold/20 flex items-center justify-center">
                  <span className="font-serif text-lg text-sun-gold font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-earth-brown">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-chalk group"
          >
            <Link to="/impact">
              Explore All Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
