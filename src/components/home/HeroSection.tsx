import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rishabshettyofficial_1768970461589.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children walking to school in a Karnataka village at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-earth-brown/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/60 via-transparent to-earth-brown/20" />
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-sun-gold/20 organic-blob blur-2xl animate-float" />
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-terracotta/20 organic-blob-2 blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Kannada accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-sun-gold/20 backdrop-blur-sm rounded-full text-chalk text-sm font-medium tracking-wide border border-sun-gold/30">
              ಕನ್ನಡ ಶಿಕ್ಷಣ • ಸಮುದಾಯ ಸೇವೆ
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-chalk mb-6 leading-tight"
          >
            Preserving Kannada.
            <br />
            <span className="text-sun-gold-light">Empowering Futures.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-chalk/90 mb-10 leading-relaxed max-w-xl"
          >
            From the heart of Karnataka's villages, we're nurturing education, 
            preserving heritage, and building futures — one child, one community at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-sun-gold hover:bg-sun-gold-light text-primary-foreground font-semibold shadow-warm group px-8"
            >
              <Link to="/about">
                Learn Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-chalk/20 hover:bg-chalk/30 text-chalk border border-chalk/50 backdrop-blur-sm font-semibold"
            >
              <Link to="/get-involved">
                Get Involved
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-chalk/60">
          <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-chalk/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-chalk/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
