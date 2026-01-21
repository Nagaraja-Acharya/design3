import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import KeradiStoryPreview from "@/components/home/KeradiStoryPreview";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import ImpactSection from "@/components/home/ImpactSection";
import NewsSection from "@/components/home/NewsSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <KeradiStoryPreview />
      <FocusAreasSection />
      <ImpactSection />
      <NewsSection />
      <GetInvolvedSection />
    </Layout>
  );
};

export default Index;
