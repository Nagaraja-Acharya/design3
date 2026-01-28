import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote, MapPin, Building2, Users, Laptop, UserCheck, Droplets, GraduationCap, Car, Lightbulb, Heart } from "lucide-react";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462205.jpg";
import communityGathering from "@/assets/rishabshettyofficial_1768970462394.jpg";
import keradiSchool from "@/assets/rishabshettyofficial_1768970464184.jpg";

const stats = [
  { number: "5,000+", label: "Students Impacted", description: "Children receiving quality Kannada education" },
  { number: "15", label: "Schools Supported", description: "Government schools adopted and upgraded" },
  { number: "25+", label: "Scholarship Recipients", description: "PU students supported with scholarships" },
  { number: "100+", label: "Teachers Trained", description: "Educators equipped with modern skills" },
  { number: "₹6Cr+", label: "Resources Deployed", description: "Investment in education infrastructure" },
  { number: "3", label: "Smart Classes", description: "Technology-enabled learning at Keradi, Bellala, Murutu" },
];

const stories = [
  {
    title: "Suma's Dream",
    location: "Keradi Village",
    quote: "I was about to drop out. My family couldn't afford books. Now I'm top of my class and want to become a doctor.",
    name: "Suma, Class 8 Student",
    image: childrenLearning,
  },
  {
    title: "A Teacher's Transformation",
    location: "Kundapura",
    quote: "The training program changed how I teach. My students are more engaged, more curious. I feel renewed.",
    name: "Rekha Kumari, Teacher",
  },
  {
    title: "Community Revival",
    location: "Byndoor",
    quote: "When the foundation came, they didn't just fix our school. They brought our whole village together again.",
    name: "Narayan Poojary, Village Elder",
    image: communityGathering,
  },
];

const milestones = [
  { year: "2019", achievement: "Keradi School adoption — enrollment doubles within a year" },
  { year: "2020", achievement: "Foundation formally established with a core team of 10" },
  { year: "2021", achievement: "Expansion to 5 additional schools across coastal Karnataka" },
  { year: "2022", achievement: "Launch of teacher training program — 50 educators in first batch" },
  { year: "2023", achievement: "Community development programs begin in 10 villages" },
  { year: "2024", achievement: "Smart classes established in Keradi, Bellala, and Murutu schools. Scholarship program reaches 25+ PU students" },
  { year: "2025", achievement: "Comprehensive infrastructure development with ₹1 lakh smart classroom technology and solar power systems" },
];

export default function Impact() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);
  const { ref: storiesRef, isVisible: storiesVisible } = useScrollReveal(0.1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-earth-brown text-chalk relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="impactPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#impactPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              Our Impact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stories Written in
              <span className="text-sun-gold-light"> Action</span>
            </h1>
            <p className="text-xl text-chalk/85 leading-relaxed">
              Every number here represents a life transformed, a community strengthened, 
              a future made brighter. This is the change we're building together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section
        ref={statsRef}
        className={`py-24 bg-chalk transition-all duration-1000 ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border/50 text-center hover:shadow-warm transition-shadow"
              >
                <span className="block text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sun-gold mb-2">
                  {stat.number}
                </span>
                <span className="block font-semibold text-earth-brown mb-1">
                  {stat.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section
        ref={storiesRef}
        className={`py-24 bg-chalk-warm transition-all duration-1000 ${
          storiesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Voices of Change"
            title="Their Stories, Our Mission"
            description="Real people, real impact. These are the stories that drive us forward."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:shadow-elevated transition-shadow"
              >
                {story.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {story.location}
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-earth-brown mb-4">
                    {story.title}
                  </h3>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 w-6 h-6 text-sun-gold/30" />
                    <p className="text-muted-foreground italic pl-5 mb-4">
                      "{story.quote}"
                    </p>
                  </div>

                  <p className="text-sm font-medium text-earth-brown">
                    — {story.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-earth-brown text-chalk">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              Growth Over Time
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-chalk/20 -translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-sun-gold flex items-center justify-center z-10">
                    <span className="font-serif font-bold text-primary-foreground text-sm">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}>
                    <p className="text-chalk/90 leading-relaxed">
                      {milestone.achievement}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact & Contributions */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold mb-4">
              Our Impact & Contributions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-earth-brown mb-6">
              Building Better Learning Environments Through Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Rishab Shetty Foundation has been actively working towards strengthening government schools through comprehensive development initiatives.
            </p>
          </div>

          {/* Academic Years Timeline */}
          <div className="space-y-16">
            {/* 2024-25 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-earth-brown text-chalk px-6 py-3 rounded-full font-serif text-lg font-semibold">
                  Academic Year 2024–25
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-6 h-6 text-sun-gold" />
                      <h3 className="font-semibold text-lg text-earth-brown">Infrastructure Development</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-chalk-warm rounded-lg p-3">
                        <div className="font-medium text-sun-gold">Playground</div>
                        <div className="text-muted-foreground">Complete levelling</div>
                      </div>
                      <div className="bg-chalk-warm rounded-lg p-3">
                        <div className="font-medium text-sun-gold">Buildings</div>
                        <div className="text-muted-foreground">Fresh painting</div>
                      </div>
                      <div className="bg-chalk-warm rounded-lg p-3">
                        <div className="font-medium text-sun-gold">Classrooms</div>
                        <div className="text-muted-foreground">Tile installation (2)</div>
                      </div>
                      <div className="bg-chalk-warm rounded-lg p-3">
                        <div className="font-medium text-sun-gold">Sanitation</div>
                        <div className="text-muted-foreground">New toilet facility</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-sun-gold" />
                      <h3 className="font-semibold text-lg text-earth-brown">Student Support</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['ID Cards', 'LKG/UKG Uniforms', 'Classroom Boards', 'Notice Boards', 'Name Boards (2)'].map((item) => (
                        <span key={item} className="bg-sun-gold/20 text-sun-gold px-3 py-1 rounded-full text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="w-6 h-6 text-sun-gold" />
                      <h3 className="font-semibold text-lg text-earth-brown">Facilities & Utilities</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">School Vehicles</span>
                        <span className="bg-sun-gold/20 text-sun-gold px-2 py-1 rounded text-xs">2 + Maintenance</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Water Purifier</span>
                        <span className="bg-sun-gold/20 text-sun-gold px-2 py-1 rounded text-xs">1 Unit</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Solar Power System</span>
                        <span className="bg-sun-gold/20 text-sun-gold px-2 py-1 rounded text-xs">Installed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck className="w-6 h-6 text-sun-gold" />
                      <h3 className="font-semibold text-lg text-earth-brown">Human Resources</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sun-gold rounded-full"></div>
                        <span className="text-muted-foreground">Honorary teachers appointed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sun-gold rounded-full"></div>
                        <span className="text-muted-foreground">Support staff (Aya) appointed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025-26 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-sun-gold text-primary-foreground px-6 py-3 rounded-full font-serif text-lg font-semibold">
                  Academic Year 2025–26
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <Laptop className="w-6 h-6 text-sun-gold" />
                    <h3 className="font-semibold text-earth-brown">Education & Technology</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 15 student uniforms</li>
                    <li>• Computer support</li>
                    <li>• Television repair</li>
                    <li>• Laboratory kit provision</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-sun-gold" />
                    <h3 className="font-semibold text-earth-brown">Digital Learning</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-sun-gold mb-1">₹1,00,000</div>
                    <div className="text-sm text-muted-foreground">Smart Class Setup</div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-sun-gold" />
                    <h3 className="font-semibold text-earth-brown">Experiential Learning</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-sun-gold mb-1">₹25,000</div>
                    <div className="text-sm text-muted-foreground">Educational Tours</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="w-6 h-6 text-sun-gold" />
                    <h3 className="font-semibold text-earth-brown">Water & Maintenance</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-sun-gold">Borewell Pump Installation</div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-sun-gold" />
                    <h3 className="font-semibold text-earth-brown">Collaboration</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-sun-gold">Yuva Foundation Partnership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="mt-20 bg-earth-brown text-chalk rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-center mb-8">Impact at a Glance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sun-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-serif font-bold text-sun-gold-light">25+</span>
                </div>
                <div className="font-medium mb-1">Initiatives Completed</div>
                <div className="text-sm text-chalk/70">Educational & infrastructure projects</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sun-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-serif font-bold text-sun-gold-light">2</span>
                </div>
                <div className="font-medium mb-1">Years of Support</div>
                <div className="text-sm text-chalk/70">Continuous development</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sun-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-serif font-bold text-sun-gold-light">100+</span>
                </div>
                <div className="font-medium mb-1">Students Benefited</div>
                <div className="text-sm text-chalk/70">Direct impact on education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments That Matter"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[childrenLearning, keradiSchool, communityGathering].map((img, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Impact gallery image ${index + 1}`}
                  className={`w-full ${index === 0 ? 'h-full' : 'h-48 md:h-64'} object-cover hover:scale-105 transition-transform duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
