import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  foundation: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/keradi-story" },
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "Impact", href: "/impact" },
  ],
  engage: [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Volunteer", href: "/get-involved" },
    { label: "Partner With Us", href: "/contact" },
    { label: "News & Updates", href: "/news" },
  ],
  resources: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-earth-brown text-chalk relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sun-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-chalk leading-tight">
                  Rishab Shetty
                </span>
                <span className="text-xs text-chalk/70 tracking-wider uppercase">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="text-chalk/80 mb-6 max-w-sm leading-relaxed">
              Preserving Kannada heritage while empowering futures through education, 
              welfare, and community development across rural Karnataka.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-chalk/10 hover:bg-sun-gold flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-chalk group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-sun-gold-light">
              Foundation
            </h4>
            <ul className="space-y-3">
              {footerLinks.foundation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-chalk/70 hover:text-chalk transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-sun-gold-light">
              Engage
            </h4>
            <ul className="space-y-3">
              {footerLinks.engage.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-chalk/70 hover:text-chalk transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-sun-gold-light">
              Stay Connected
            </h4>
            <p className="text-chalk/70 text-sm mb-4">
              Subscribe for stories of hope and impact from our community.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-chalk/10 border-chalk/20 text-chalk placeholder:text-chalk/50"
              />
              <Button className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-chalk/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-chalk/70">
              <a href="mailto:info@rishabshettyfoundation.org" className="flex items-center gap-2 hover:text-chalk transition-colors">
                <Mail className="w-4 h-4" />
                info@rishabshettyfoundation.org
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                No 290/2, 2nd floor, Lakshmi Arcade, Siddaiah road, Bangalore 560027
              </span>
            </div>
            <p className="text-sm text-chalk/60">
              © {new Date().getFullYear()} Rishab Shetty Foundation. All rights reserved.
            </p>
          </div>
        </div>

        {/* Kannada Accent */}
        <div className="mt-8 text-center">
          <span className="text-2xl text-chalk/20 font-serif">
            ನಮ್ಮ ಕನ್ನಡ • ನಮ್ಮ ಹೆಮ್ಮೆ
          </span>
        </div>
      </div>
    </footer>
  );
}
