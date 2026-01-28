import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@rishabshettyfoundation.org",
    href: "mailto:info@rishabshettyfoundation.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "No 290/2, 2nd floor, Lakshmi Arcade, Siddaiah road, Bangalore 560027",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Contact() {
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
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, ideas, or want to collaborate? We'd love to hear from you. 
              Reach out and let's create change together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-earth-brown mb-6">
                Send Us a Message
              </h2>

              <form 
                className="space-y-6 bg-card p-8 rounded-2xl shadow-soft border border-border/50"
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What is this regarding?" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sun-gold hover:bg-sun-gold-light text-primary-foreground font-semibold"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-earth-brown mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sun-gold/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-sun-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-earth-brown hover:text-sun-gold transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-earth-brown font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-earth-brown mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-secondary hover:bg-sun-gold flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-earth-brown text-chalk text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Looking to Get Involved?
          </h2>
          <p className="text-chalk/80 mb-6 max-w-lg mx-auto">
            Whether you want to donate, volunteer, or partner with us — 
            we have many ways for you to contribute.
          </p>
          <Button
            asChild
            className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground"
          >
            <a href="/get-involved">
              Explore Ways to Help
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
