import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, Users, Briefcase, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const involvementOptions = [
  {
    id: "donate",
    icon: HandHeart,
    title: "Support Our Cause",
    tagline: "Make a Difference Today",
    color: "terracotta",
    description: "Your contribution directly funds school infrastructure, student scholarships, learning resources, and community programs. Every rupee goes toward building a brighter future.",
    benefits: [
      "Tax benefits under Section 80G",
      "Quarterly impact reports",
      "Recognition on our donor wall",
      "Invitations to foundation events",
    ],
    cta: "Donate Now",
    ctaLink: "#donate-form",
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer With Us",
    tagline: "Share Your Time and Skills",
    color: "forest",
    description: "Whether you're a teacher, professional, student, or retiree — your skills can transform lives. Join our volunteer network and contribute to education and community development.",
    opportunities: [
      "Teaching and mentoring students",
      "Career guidance workshops",
      "Skill development sessions",
      "Content creation and translation",
      "Event organization and support",
    ],
    cta: "Join as Volunteer",
    ctaLink: "#volunteer-form",
  },
  {
    id: "partner",
    icon: Briefcase,
    title: "Partner With Us",
    tagline: "Amplify Your Impact",
    color: "sun-gold",
    description: "Corporate CSR initiatives, academic collaborations, resource partnerships — let's work together to scale impact. We welcome organizations that share our vision.",
    partnerTypes: [
      "Corporate CSR partnerships",
      "Educational institution tie-ups",
      "NGO collaborations",
      "Government program alignment",
      "Resource and material sponsors",
    ],
    cta: "Become a Partner",
    ctaLink: "#partner-form",
  },
];

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState("volunteer");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-earth-brown to-earth-brown-light text-chalk relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="involvePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#involvePattern)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-chalk/5 font-serif whitespace-nowrap">
          ಸೇವೆ • ಶಿಕ್ಷಣ
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold-light mb-4">
              Get Involved
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Step.
              <span className="text-sun-gold-light"> Our Journey.</span>
            </h1>
            <p className="text-xl text-chalk/85 leading-relaxed">
              Every contribution — whether time, resources, or expertise — becomes 
              a ripple of change in the lives of rural Karnataka's children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.id}
                id={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 ${
                  activeTab === option.id ? 'ring-2 ring-sun-gold' : ''
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  option.color === 'terracotta' ? 'bg-terracotta/20' :
                  option.color === 'forest' ? 'bg-forest/20' : 'bg-sun-gold/20'
                }`}>
                  <option.icon className={`w-8 h-8 ${
                    option.color === 'terracotta' ? 'text-terracotta' :
                    option.color === 'forest' ? 'text-forest' : 'text-sun-gold'
                  }`} />
                </div>

                <span className={`text-sm font-medium ${
                  option.color === 'terracotta' ? 'text-terracotta' :
                  option.color === 'forest' ? 'text-forest' : 'text-sun-gold'
                }`}>
                  {option.tagline}
                </span>

                <h2 className="font-serif text-2xl font-semibold text-earth-brown mt-2 mb-4">
                  {option.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {option.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {(option.benefits || option.opportunities || option.partnerTypes)?.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        option.color === 'terracotta' ? 'text-terracotta' :
                        option.color === 'forest' ? 'text-forest' : 'text-sun-gold'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => setActiveTab(option.id)}
                  className={`w-full ${
                    option.color === 'terracotta' ? 'bg-terracotta hover:bg-terracotta/90' :
                    option.color === 'forest' ? 'bg-forest hover:bg-forest/90' : 
                    'bg-sun-gold hover:bg-sun-gold-light'
                  } text-primary-foreground`}
                >
                  {option.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-24 bg-chalk-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              eyebrow={activeTab === "donate" ? "Make a Contribution" : activeTab === "volunteer" ? "Join Our Team" : "Partner With Us"}
              title={activeTab === "donate" ? "Support Our Mission" : activeTab === "volunteer" ? "Become a Volunteer" : "Start a Partnership"}
              description={
                activeTab === "donate" 
                  ? "Your generosity fuels our work. Fill out the form below and our team will reach out with payment details."
                  : activeTab === "volunteer"
                  ? "Tell us about yourself and how you'd like to contribute. We'll match you with opportunities that fit your skills."
                  : "Share your organization's details and how you envision collaborating with us."
              }
            />

            <form 
              className="mt-12 space-y-6 bg-card p-8 rounded-2xl shadow-soft border border-border/50"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="Your name" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your@email.com" className="bg-background" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {activeTab === "donate" ? "Contribution Amount" : activeTab === "volunteer" ? "Skills / Expertise" : "Organization Name"}
                  </label>
                  <Input 
                    placeholder={activeTab === "donate" ? "₹ 5,000" : activeTab === "volunteer" ? "Teaching, Design, etc." : "Company name"}
                    className="bg-background" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {activeTab === "donate" ? "Message (Optional)" : activeTab === "volunteer" ? "How would you like to help?" : "Partnership Proposal"}
                </label>
                <Textarea 
                  placeholder={
                    activeTab === "donate" 
                      ? "Any specific program you'd like to support?" 
                      : activeTab === "volunteer"
                      ? "Tell us about your availability and interests..."
                      : "Describe your vision for collaboration..."
                  }
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-sun-gold hover:bg-sun-gold-light text-primary-foreground font-semibold"
              >
                Submit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We typically respond within 2-3 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-earth-brown text-chalk text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Have Questions?
          </h2>
          <p className="text-chalk/80 mb-6">
            We're here to help. Reach out to us anytime.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-chalk text-chalk hover:bg-chalk hover:text-earth-brown"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
