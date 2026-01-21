import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Users as Community, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462205.jpg";
import communityGathering from "@/assets/rishabshettyofficial_1768970462394.jpg";

const focusAreas = [
  {
    icon: BookOpen,
    title: "Kannada Medium Education",
    description: "Preserving our mother tongue by supporting government schools, improving infrastructure, and providing quality education in Kannada.",
    color: "sun-gold",
    link: "/focus-areas#education",
  },
  {
    icon: Users,
    title: "Children's Welfare",
    description: "Ensuring every child has access to nutrition, healthcare, learning resources, and a safe environment to grow and thrive.",
    color: "terracotta",
    link: "/focus-areas#welfare",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Empowering rural communities through sustainable initiatives, skill development, and cultural preservation programs.",
    color: "forest",
    link: "/focus-areas#community",
  },
];

export default function FocusAreasSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 bg-chalk relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sun-gold/10 organic-blob blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-forest/5 organic-blob-2 blur-3xl" />

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeading
          eyebrow="What We Do"
          title="Rooted in Purpose"
          description="Our work spans three interconnected pillars — each strengthening the other to create lasting change."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {focusAreas.map((area, index) => (
            <Link
              key={area.title}
              to={area.link}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  area.color === 'sun-gold' ? 'bg-sun-gold/20' :
                  area.color === 'terracotta' ? 'bg-terracotta/20' : 'bg-forest/20'
                }`}
              >
                <area.icon 
                  className={`w-8 h-8 ${
                    area.color === 'sun-gold' ? 'text-sun-gold' :
                    area.color === 'terracotta' ? 'text-terracotta' : 'text-forest'
                  }`} 
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
                {area.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>

              <span 
                className={`inline-flex items-center gap-2 font-medium ${
                  area.color === 'sun-gold' ? 'text-sun-gold group-hover:text-terracotta' :
                  area.color === 'terracotta' ? 'text-terracotta group-hover:text-sun-gold' : 
                  'text-forest group-hover:text-sun-gold'
                } transition-colors`}
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Decorative corner */}
              <div 
                className={`absolute top-0 right-0 w-20 h-20 ${
                  area.color === 'sun-gold' ? 'bg-sun-gold/10' :
                  area.color === 'terracotta' ? 'bg-terracotta/10' : 'bg-forest/10'
                } rounded-bl-3xl rounded-tr-2xl -z-10`}
              />
            </Link>
          ))}
        </div>

        {/* Image gallery preview */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={childrenLearning}
              alt="Children learning together in a village school classroom"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-chalk">
              <span className="text-sm opacity-80">Education in action</span>
              <h4 className="font-serif text-xl font-medium">Learning Together</h4>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={communityGathering}
              alt="Community gathering in rural Karnataka village"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-chalk">
              <span className="text-sm opacity-80">Community bonds</span>
              <h4 className="font-serif text-xl font-medium">Stronger Together</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
