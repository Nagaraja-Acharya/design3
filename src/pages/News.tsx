import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    id: "scholarship-program",
    date: "January 15, 2026",
    category: "Announcement",
    title: "Foundation Launches New Scholarship Program for Rural Students",
    excerpt: "A new initiative to support meritorious students from government Kannada schools with higher education opportunities. The program will cover tuition fees, books, and living expenses for deserving students.",
    featured: true,
  },
  {
    id: "kannada-habba",
    date: "December 28, 2025",
    category: "Event",
    title: "Annual Kannada Habba Celebrates Language and Culture",
    excerpt: "Over 2,000 students participated in the cultural extravaganza celebrating Kannada heritage and arts. The three-day festival featured folk performances, literary competitions, and art exhibitions.",
    featured: true,
  },
  {
    id: "keradi-enrollment",
    date: "November 10, 2025",
    category: "Impact",
    title: "Keradi School Records Highest Enrollment in a Decade",
    excerpt: "The school that was once on the verge of closure now welcomes its largest batch of new students, marking a historic turnaround for Kannada medium education in the region.",
    featured: false,
  },
  {
    id: "teacher-training",
    date: "October 5, 2025",
    category: "Program",
    title: "50 Teachers Complete Advanced Pedagogy Workshop",
    excerpt: "The month-long residential program equipped educators with modern teaching methods while honoring traditional values. Participants came from 12 districts across Karnataka.",
    featured: false,
  },
  {
    id: "new-schools",
    date: "September 18, 2025",
    category: "Expansion",
    title: "Three New Schools Join the Foundation Network",
    excerpt: "Government schools in Udupi, Dakshina Kannada, and Uttara Kannada districts have been adopted, bringing the total to 15 schools under the foundation's umbrella.",
    featured: false,
  },
  {
    id: "community-award",
    date: "August 25, 2025",
    category: "Recognition",
    title: "Foundation Receives State Award for Rural Development",
    excerpt: "The Karnataka government recognized the foundation's outstanding contribution to rural education and community development with the Rajyotsava Award.",
    featured: false,
  },
  {
    id: "health-camp",
    date: "July 12, 2025",
    category: "Welfare",
    title: "Medical Camp Benefits 500+ Children Across 8 Villages",
    excerpt: "Free health check-ups, dental care, and vision screening provided to school children. 120 students received free spectacles through the program.",
    featured: false,
  },
  {
    id: "infrastructure",
    date: "June 3, 2025",
    category: "Development",
    title: "New Computer Lab Inaugurated at Byndoor School",
    excerpt: "State-of-the-art computer lab with 20 systems and Kannada-language educational software now serves students from class 5 onwards.",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Announcement: "bg-sun-gold/20 text-sun-gold",
  Event: "bg-terracotta/20 text-terracotta",
  Impact: "bg-forest/20 text-forest",
  Program: "bg-sun-gold/20 text-sun-gold",
  Expansion: "bg-forest/20 text-forest",
  Recognition: "bg-terracotta/20 text-terracotta",
  Welfare: "bg-terracotta/20 text-terracotta",
  Development: "bg-forest/20 text-forest",
};

export default function News() {
  const featuredNews = newsArticles.filter((n) => n.featured);
  const regularNews = newsArticles.filter((n) => !n.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sun-gold/10 organic-blob blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-sun-gold mb-4">
              News & Updates
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-6">
              What's Happening
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest news, events, and stories from the foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-chalk">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-semibold text-earth-brown mb-8">
            Featured Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="h-3 bg-gradient-sunset" />
                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-earth-brown mb-4 group-hover:text-sun-gold transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <Link 
                    to={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-sun-gold font-semibold group-hover:text-terracotta transition-colors"
                  >
                    Read full story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-chalk-warm">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-semibold text-earth-brown mb-8">
            All Updates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3 ${categoryColors[article.category]}`}>
                  {article.category}
                </span>

                <h3 className="font-serif text-lg font-semibold text-earth-brown mb-3 group-hover:text-sun-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <Link 
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-1 text-sm text-sun-gold font-medium group-hover:text-terracotta transition-colors"
                >
                  Read more
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-earth-brown text-chalk">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Stay Connected
          </h2>
          <p className="text-chalk/80 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter for monthly updates on our work, 
            stories from the field, and opportunities to get involved.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-chalk/10 border border-chalk/20 text-chalk placeholder:text-chalk/50 focus:outline-none focus:border-sun-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sun-gold hover:bg-sun-gold-light text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
