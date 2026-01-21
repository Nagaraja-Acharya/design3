import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HandHeart, Eye, Target, Star } from "lucide-react";
import rsFoundationImage from "@/assets/RSFoundation.jpg";

const values = [
  {
    icon: HandHeart,
    title: "Compassion",
    description: "Every action is rooted in genuine care for the communities we serve.",
  },
  {
    icon: Eye,
    title: "Authenticity",
    description: "We stay true to our cultural roots while embracing progress.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Meaningful, measurable change that transforms lives and communities.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for the highest standards in education and welfare.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Rishab Shetty adopts Keradi Government School and enrolls his own children, marking the foundation's first step.",
  },
  {
    year: "2020",
    title: "Foundation Established",
    description: "Official registration of the Rishab Shetty Foundation with a mission to preserve Kannada education.",
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Programs extended to 5 more schools across coastal Karnataka districts.",
  },
  {
    year: "2022",
    title: "Kantara Release",
    description: "The film's success amplifies the foundation's message of cultural preservation to millions.",
  },
  {
    year: "2023",
    title: "Community Programs",
    description: "Launch of skill development and women empowerment initiatives in rural areas.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description: "15 schools supported, scholarship programs launched, and teacher training initiatives begun.",
  },
];

export default function About() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal(0.2);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal(0.1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" className="text-earth-brown" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold mb-4">
              About the Foundation
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-6 leading-tight">
              A Story of Roots 
              <span className="text-sun-gold"> and Wings</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a deep love for Karnataka's culture and an unwavering belief 
              in the power of education, the Rishab Shetty Foundation works to preserve 
              our linguistic heritage while empowering future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        ref={missionRef}
        className={`py-24 bg-chalk transition-all duration-1000 ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-earth-brown text-chalk p-10 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sun-gold/20 organic-blob" />
              <span className="text-sun-gold-light text-sm font-medium tracking-wider uppercase">Our Mission</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mt-4 mb-6">
                Nurturing Minds, Preserving Heritage
              </h2>
              <p className="text-chalk/85 leading-relaxed text-lg">
                To strengthen Kannada medium education in rural Karnataka by supporting 
                government schools, uplifting communities, and ensuring every child 
                has access to quality education that honors their cultural identity.
              </p>
            </div>

            <div className="bg-sun-gold/10 p-10 md:p-12 rounded-2xl border border-sun-gold/30 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-terracotta/10 organic-blob-2" />
              <span className="text-sun-gold text-sm font-medium tracking-wider uppercase">Our Vision</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-earth-brown mt-4 mb-6">
                A Karnataka Where Language Thrives
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a future where Kannada medium schools are centers of 
                excellence, where children are proud of their mother tongue, and 
                where rural communities thrive through education and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-chalk-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold mb-4">
              The Founder
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-earth-brown mb-8">
              Rishab Shetty
            </h2>
            
            <div className="relative inline-block mb-8">
              <img 
                src={rsFoundationImage} 
                alt="Rishab Shetty"
                className="w-40 h-40 rounded-full object-cover shadow-warm"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                <span className="text-chalk text-xl">🎬</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Actor, filmmaker, and cultural advocate, Rishab Shetty is deeply connected 
              to Karnataka's roots. His journey from coastal Karnataka's villages to 
              becoming one of Indian cinema's most celebrated storytellers has never 
              distanced him from his origins.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The foundation reflects his personal conviction — demonstrated when he 
              chose to enroll his own children in a Kannada medium government school 
              in Keradi, walking the talk on preserving linguistic heritage.
            </p>
            <blockquote className="text-xl font-serif italic text-earth-brown border-l-4 border-sun-gold pl-6 text-left mt-10">
              "Cinema can inspire change, but real change happens in classrooms, 
              in villages, in the hearts of our children. That's where we must invest."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef}
        className={`py-24 bg-chalk transition-all duration-1000 ${
          valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Us"
            description="These principles shape every decision, every program, every interaction."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-sun-gold/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-sun-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-earth-brown mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={timelineRef}
        className={`py-24 bg-earth-brown text-chalk transition-all duration-1000 ${
          timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Milestones Along the Way
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-sun-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-primary-foreground">{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-chalk/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-xl font-semibold text-sun-gold-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-chalk/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
