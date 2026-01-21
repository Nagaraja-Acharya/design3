import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, BookOpen, Users as Community } from "lucide-react";
import keradiSchool from "@/assets/rishabshettyofficial_1768970464184.jpg";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462205.jpg";

const storyChapters = [
  {
    title: "A School on the Edge",
    content: "In the serene village of Keradi, nestled among the lush green hills of coastal Karnataka, stood a small government school. For decades, it had been the heart of the community — where children learned to read, write, and dream. But times were changing. Enrollment was dwindling. Parents, lured by the promise of English medium education, were sending their children to distant towns. The school that had nurtured generations was slowly fading away.",
  },
  {
    title: "A Father's Choice",
    content: "Then came a moment that would change everything. Rishab Shetty, already a celebrated name in Karnataka's film industry, made an unexpected decision. Rather than enrolling his children in a prestigious private school, he chose Keradi's government Kannada medium school. This wasn't just a personal choice — it was a statement, a commitment to the values he held dear.",
  },
  {
    title: "From One Family to Many",
    content: "The news spread through the village like morning sunlight. If one of Karnataka's most successful artists trusted this school for his own children, perhaps there was something worth believing in. One by one, families began reconsidering. Parents who had left returned. New families enrolled. The classrooms that had grown silent began to fill with laughter once again.",
  },
  {
    title: "Rebuilding Together",
    content: "But belief alone wasn't enough. The school needed infrastructure, resources, trained teachers. The foundation stepped in — renovating classrooms, providing learning materials, organizing teacher training programs. The community rallied together, contributing labor, land, and most importantly, their trust.",
  },
];

const impactNumbers = [
  { number: "150+", label: "Students Now Enrolled", icon: Users },
  { number: "12", label: "Teachers & Staff", icon: BookOpen },
  { number: "100%", label: "Community Participation", icon: Community },
];

export default function KeradiStory() {
  const { ref: chapterRef, isVisible: chapterVisible } = useScrollReveal(0.1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={keradiSchool}
            alt="Keradi School - A traditional Karnataka village school"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-earth-brown/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-sun-gold-light text-sm font-medium tracking-wider uppercase mb-4">
              <MapPin className="w-4 h-4" />
              Keradi Village, Karnataka
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-chalk mb-6 leading-tight">
              The Story of
              <span className="block text-sun-gold-light">Keradi School</span>
            </h1>
            <p className="text-xl text-chalk/90 max-w-2xl mx-auto leading-relaxed">
              How a simple decision by one father sparked a revival that saved 
              a village school and became a beacon of hope for Kannada education.
            </p>
          </motion.div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto fill-chalk">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Story Chapters */}
      <section
        ref={chapterRef}
        className={`py-24 bg-chalk transition-all duration-1000 ${
          chapterVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sun-gold/20 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-sun-gold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-earth-brown mb-4">
                      {chapter.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {chapter.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-16 bg-chalk-warm">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-elevated">
            <img
              src={childrenLearning}
              alt="Children learning together at Keradi School"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-chalk font-serif text-xl md:text-2xl italic">
                "In every child's smile, I see the future of our language, our culture, our Karnataka."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Today Section */}
      <section className="py-24 bg-earth-brown text-chalk">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              Keradi Today
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              A School Reborn
            </h2>
            <p className="text-xl text-chalk/85 leading-relaxed mb-12">
              The school that was once on the verge of closure now thrives as one of 
              the best-performing government schools in the region. Children who might 
              have lost their connection to Kannada now read poetry, solve problems, 
              and dream big — all in their mother tongue.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {impactNumbers.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sun-gold/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-sun-gold-light" />
                  </div>
                  <span className="block text-4xl font-serif font-bold text-sun-gold mb-2">
                    {stat.number}
                  </span>
                  <span className="text-chalk/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-earth-brown mb-6">
            Be Part of the Next Chapter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Keradi's story is just the beginning. Help us bring this transformation 
            to more schools, more villages, more children across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground shadow-warm group"
            >
              <Link to="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-chalk"
            >
              <Link to="/impact">
                See Our Impact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
