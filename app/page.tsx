import Header from "@/components/layout/header/Header";
// import HomeBanner from "@/components/layout/banner/HomeBanner";
// import TextSlider from "@/components/containers/home/TextSlider";
// import Craft from "@/components/containers/home/Craft";
// import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
// import Tools from "@/components/containers/home/Tools";
// import Generation from "@/components/containers/home/Generation";
// import Partner from "@/components/containers/home/Partner";
// import ServiceSlider from "@/components/containers/home/ServiceSlider";
// import UnlockSection from "@/components/containers/home/UnlockSection";
// import Overview from "@/components/containers/home/Overview";
// import VideoSection from "@/components/containers/home/VideoSection";
// import GenerationTwo from "@/components/containers/home/GenerationTwo";
// import PricingPlan from "@/components/containers/home/PricingPlan";
// import BlogOne from "@/components/containers/home/BlogOne";
// import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Footer from "@/components/custom/footer";
import Banner from "@/components/custom/banner/Banner";
import LittleTitle from "@/components/custom/little-title/LittleTitle";
import Carousel from "@/components/custom/carousel/Carousel";
import IntroductionSection from "@/components/custom/introduction/Introduction";
import ImpactSection from "@/components/custom/impact/Impact";
import LastSection from "@/components/custom/last/Last";
import FindClassSection from "@/components/custom/find-class/FindClass";
import ReversedTitle from "@/components/custom/reversed-title/ReversedTitle";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <Banner />
        <LittleTitle />
        <Carousel />
        <ReversedTitle />
        <IntroductionSection />
        <ImpactSection />
        <LastSection />
        <FindClassSection />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
