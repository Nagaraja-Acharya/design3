import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const newsItems = [
  {
    date: "January 15, 2026",
    category: "Announcement",
    title: "Foundation Launches New Scholarship Program for Rural Students",
    excerpt: "A new initiative to support meritorious students from government Kannada schools with higher education opportunities.",
    link: "/news/scholarship-program",
  },
  {
    date: "December 28, 2025",
    category: "Event",
    title: "Annual Kannada Habba Celebrates Language and Culture",
    excerpt: "Over 2,000 students participated in the cultural extravaganza celebrating Kannada heritage and arts.",
    link: "/news/kannada-habba",
  },
  {
    date: "November 10, 2025",
    category: "Impact",
    title: "Keradi School Records Highest Enrollment in a Decade",
    excerpt: "The school that was once on the verge of closure now welcomes its largest batch of new students.",
    link: "/news/keradi-enrollment",
  },
];

export default function NewsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 bg-chalk relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-sun-gold/10 organic-blob blur-3xl" />
      
      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="News & Updates"
            title="What's Happening"
            align="left"
            className="mb-0"
          />
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-sun-gold hover:text-terracotta font-semibold group"
          >
            View all updates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Colored top bar */}
              <div className={`h-2 ${
                index === 0 ? 'bg-sun-gold' :
                index === 1 ? 'bg-terracotta' : 'bg-forest'
              }`} />
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.category === 'Announcement' ? 'bg-sun-gold/20 text-sun-gold' :
                    item.category === 'Event' ? 'bg-terracotta/20 text-terracotta' :
                    'bg-forest/20 text-forest'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3 group-hover:text-sun-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sun-gold font-medium mt-4 group-hover:text-terracotta transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
