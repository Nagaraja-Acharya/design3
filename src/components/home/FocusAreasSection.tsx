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
    description: "We believe that learning in Kannada helps children understand concepts more naturally, participate with confidence, and remain connected to their cultural roots. Our support is centered on strengthening government schools so that children in rural Karnataka can access quality learning in a familiar language.",
    color: "sun-gold",
    link: "/focus-areas#education",
  },
  {
    icon: Users,
    title: "Children's Welfare",
    description: "A child's education becomes stronger when health, safety, and emotional well-being are also protected. Through children's welfare initiatives, we aim to create school environments where students feel cared for, supported, and encouraged to learn without barriers.",
    color: "terracotta",
    link: "/focus-areas#welfare",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Education creates its greatest impact when families, teachers, and communities work together. Our approach encourages parent involvement, school awareness, cultural pride, and local support systems that help children thrive both inside and outside the classroom.",
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
          eyebrow="Our Purpose"
          title="Where Every Step Counts"
          description="The Rishab Shetty Foundation was born from a strong belief that language is identity and education is the bridge to opportunity. Rooted in Karnataka's villages, we work to protect and strengthen Kannada medium education, support children's welfare, and build stronger rural communities."
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
