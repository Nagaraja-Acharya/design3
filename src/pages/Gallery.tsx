import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Import RSF images
import img1 from "@/assets/RSF/DSC08317 (1).jpg";
import img2 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still008.jpg";
import img3 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still009.jpg";
import img4 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still010.jpg";
import img5 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still011.jpg";
import img6 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still012.jpg";
import img7 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still013.jpg";
import img8 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still014.jpg";
import img9 from "@/assets/RSF/DSC08362 (1).jpg";
import img10 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still016.jpg";
import img11 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_03.Still002.jpg";
import img12 from "@/assets/RSF/solar_sys.png";
import img13 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_10.Still021.jpg";
import img14 from "@/assets/RSF/DSC08329 (1).jpg";
import img15 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_10.Still025.jpg";
import img16 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_17.Still027.jpg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-earth-brown text-chalk relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="galleryPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#galleryPattern)" />
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
              Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moments of
              <span className="text-sun-gold-light"> Impact</span>
            </h1>
            <p className="text-xl text-chalk/85 leading-relaxed">
              Capturing the journey of transformation, community building, and educational excellence at the Rishab Shetty Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-chalk">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-earth-brown/0 group-hover:bg-earth-brown/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-chalk/20 hover:bg-chalk/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-chalk" />
            </button>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}