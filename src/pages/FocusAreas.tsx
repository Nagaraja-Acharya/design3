import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, HandHeart, Users, Building, Lightbulb, Leaf } from "lucide-react";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462205.jpg";
import communityGathering from "@/assets/rishabshettyofficial_1768970462394.jpg";

const focusAreas = [
  {
    id: "education",
    icon: BookOpen,
    title: "Kannada Medium Education",
    tagline: "ಕನ್ನಡ ಮಾಧ್ಯಮ ಶಿಕ್ಷಣ",
    color: "sun-gold",
    description: "Preserving and strengthening Kannada medium schools across rural Karnataka.",
    initiatives: [
      {
        title: "School Adoption Program",
        description: "Comprehensive support for government Kannada schools including infrastructure, learning materials, and operational assistance.",
      },
      {
        title: "Smart Classroom Initiative",
        description: "Technology-enabled learning with ₹1 lakh TV panels at Keradi, Bellala, and Murutu schools, reducing teacher workload and modernizing education.",
      },
      {
        title: "Teacher Training",
        description: "Skill development workshops for teachers focusing on modern pedagogy while respecting traditional values.",
      },
      {
        title: "Digital Learning Resources",
        description: "Providing computers, tablets, and Kannada-language educational content to bridge the digital divide.",
      },
      {
        title: "Scholarship Program",
        description: "Financial support for 25+ PU students and meritorious students from rural backgrounds to pursue higher education.",
      },
    ],
    image: childrenLearning,
  },
  {
    id: "welfare",
    icon: HandHeart,
    title: "Children's Welfare",
    tagline: "ಮಕ್ಕಳ ಕಲ್ಯಾಣ",
    color: "terracotta",
    description: "Ensuring every child has access to nutrition, healthcare, and a safe environment to grow.",
    initiatives: [
      {
        title: "Mid-Day Meal Enhancement",
        description: "Supplementing government programs with nutritious additions and ensuring food quality.",
      },
      {
        title: "Health Camps",
        description: "Regular medical check-ups, dental care, and vision screening for school children.",
      },
      {
        title: "Counseling Services",
        description: "Mental health support and guidance for students facing personal or academic challenges.",
      },
      {
        title: "After-School Programs",
        description: "Safe spaces for children with tutoring, sports, arts, and cultural activities.",
      },
    ],
  },
  {
    id: "community",
    icon: Users,
    title: "Community Development",
    tagline: "ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ",
    color: "forest",
    description: "Empowering rural communities through sustainable initiatives and skill development.",
    initiatives: [
      {
        title: "Women's Empowerment",
        description: "Skill training, self-help groups, and entrepreneurship support for women in rural areas.",
      },
      {
        title: "Sustainable Livelihoods",
        description: "Supporting traditional crafts, organic farming, and eco-friendly business ventures.",
      },
      {
        title: "Cultural Preservation",
        description: "Documenting and promoting local art forms, folk traditions, and cultural heritage.",
      },
      {
        title: "Village Infrastructure",
        description: "Community-led improvements to public spaces, sanitation, and local amenities.",
      },
    ],
    image: communityGathering,
  },
];

export default function FocusAreas() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sun-gold/10 organic-blob blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold mb-4">
              What We Do
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-6 leading-tight">
              Three Pillars of
              <span className="text-sun-gold"> Purpose</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our work spans education, welfare, and community development — 
              three interconnected areas that together create lasting, meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      {focusAreas.map((area, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={area.id}
            id={area.id}
            className={`py-24 ${isEven ? 'bg-chalk' : 'bg-chalk-warm'} relative overflow-hidden`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    area.color === 'sun-gold' ? 'bg-sun-gold/20' :
                    area.color === 'terracotta' ? 'bg-terracotta/20' : 'bg-forest/20'
                  }`}>
                    <area.icon className={`w-8 h-8 ${
                      area.color === 'sun-gold' ? 'text-sun-gold' :
                      area.color === 'terracotta' ? 'text-terracotta' : 'text-forest'
                    }`} />
                  </div>

                  <span className={`text-sm font-medium ${
                    area.color === 'sun-gold' ? 'text-sun-gold' :
                    area.color === 'terracotta' ? 'text-terracotta' : 'text-forest'
                  }`}>
                    {area.tagline}
                  </span>

                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-earth-brown mt-2 mb-4">
                    {area.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {area.description}
                  </p>

                  <div className="space-y-6">
                    {area.initiatives.map((initiative) => (
                      <div key={initiative.title} className="flex gap-4">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          area.color === 'sun-gold' ? 'bg-sun-gold' :
                          area.color === 'terracotta' ? 'bg-terracotta' : 'bg-forest'
                        }`} />
                        <div>
                          <h3 className="font-semibold text-earth-brown mb-1">
                            {initiative.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {initiative.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  {area.image ? (
                    <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        area.color === 'sun-gold' ? 'from-sun-gold/30' :
                        area.color === 'terracotta' ? 'from-terracotta/30' : 'from-forest/30'
                      } to-transparent`} />
                    </div>
                  ) : (
                    <div className={`aspect-[4/3] rounded-2xl flex items-center justify-center ${
                      area.color === 'sun-gold' ? 'bg-sun-gold/10' :
                      area.color === 'terracotta' ? 'bg-terracotta/10' : 'bg-forest/10'
                    }`}>
                      <area.icon className={`w-32 h-32 ${
                        area.color === 'sun-gold' ? 'text-sun-gold/30' :
                        area.color === 'terracotta' ? 'text-terracotta/30' : 'text-forest/30'
                      }`} />
                    </div>
                  )}

                  {/* Stats card */}
                  <div className={`mt-6 p-6 rounded-xl ${
                    area.color === 'sun-gold' ? 'bg-sun-gold/10 border border-sun-gold/20' :
                    area.color === 'terracotta' ? 'bg-terracotta/10 border border-terracotta/20' : 
                    'bg-forest/10 border border-forest/20'
                  }`}>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <span className={`block text-2xl font-serif font-bold ${
                          area.color === 'sun-gold' ? 'text-sun-gold' :
                          area.color === 'terracotta' ? 'text-terracotta' : 'text-forest'
                        }`}>
                          {index === 0 ? '15' : index === 1 ? '5,000+' : '20+'}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {index === 0 ? 'Schools' : index === 1 ? 'Children' : 'Villages'}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className={`block text-2xl font-serif font-bold ${
                          area.color === 'sun-gold' ? 'text-sun-gold' :
                          area.color === 'terracotta' ? 'text-terracotta' : 'text-forest'
                        }`}>
                          {index === 0 ? '3' : index === 1 ? '50+' : '500+'}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {index === 0 ? 'Smart Classes' : index === 1 ? 'Programs' : 'Families'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
