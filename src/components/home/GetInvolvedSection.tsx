import { Link } from "react-router-dom";
import { ArrowRight, HandHeart, Users, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const involveOptions = [
  {
    icon: HandHeart,
    title: "Support Our Cause",
    description: "Your contribution directly supports school infrastructure, student scholarships, and community programs.",
    cta: "Donate Now",
    link: "/get-involved#donate",
    color: "terracotta",
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    description: "Share your skills and time to mentor students, teach workshops, or help with community initiatives.",
    cta: "Join as Volunteer",
    link: "/get-involved#volunteer",
    color: "forest",
  },
  {
    icon: Briefcase,
    title: "Partner With Us",
    description: "Collaborate with the foundation through CSR initiatives, academic partnerships, or resource sharing.",
    cta: "Become a Partner",
    link: "/get-involved#partner",
    color: "sun-gold",
  },
];

export default function GetInvolvedSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 bg-gradient-to-br from-earth-brown to-earth-brown-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sun-gold/10 organic-blob blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/10 organic-blob-2 blur-3xl" />
      
      {/* Kannada pattern decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-chalk/3 font-serif whitespace-nowrap">
        ಸೇವೆ • ಶಿಕ್ಷಣ • ಸಮುದಾಯ
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-3">
            Be Part of the Change
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-chalk mb-4">
            Your Step. Our Journey.
          </h2>
          <p className="text-lg text-chalk/80 max-w-2xl mx-auto">
            Every contribution — whether time, resources, or expertise — becomes 
            a ripple of change in the lives of rural Karnataka's children.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {involveOptions.map((option, index) => (
            <div
              key={option.title}
              className="bg-chalk/10 backdrop-blur-sm rounded-2xl p-8 border border-chalk/20 hover:bg-chalk/15 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  option.color === 'terracotta' ? 'bg-terracotta/30' :
                  option.color === 'forest' ? 'bg-forest/30' : 'bg-sun-gold/30'
                }`}
              >
                <option.icon 
                  className={`w-8 h-8 ${
                    option.color === 'terracotta' ? 'text-terracotta-light' :
                    option.color === 'forest' ? 'text-forest-light' : 'text-sun-gold-light'
                  }`}
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-chalk mb-3">
                {option.title}
              </h3>

              <p className="text-chalk/75 leading-relaxed mb-6">
                {option.description}
              </p>

              <Button
                asChild
                className={`${
                  option.color === 'terracotta' ? 'bg-terracotta hover:bg-terracotta/90 text-white' :
                  option.color === 'forest' ? 'bg-forest hover:bg-forest/90 text-white' : 
                  'bg-sun-gold hover:bg-sun-gold-light text-primary-foreground'
                } group/btn shadow-warm`}
              >
                <Link to={option.link}>
                  {option.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Full CTA */}
        <div className="text-center mt-16">
          <p className="text-chalk/60 mb-4">
            Have questions? Want to know more?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground shadow-warm"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
