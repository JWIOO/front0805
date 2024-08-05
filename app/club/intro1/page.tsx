import Header from "@/components/layout/header/Header";
import ServiceBanner from "./components/ServiceBanner";
import ServiceTextSlider from "@/components/containers/service/ServiceTextSlider";
// import ServiceItems from "@/components/containers/service/ServiceItems";
import ServiceItems from "@/app/club/intro1/components/ServiceItems";

import ServiceNewsletter from "@/components/containers/service/ServiceNewsletter";
import ServiceCraft from "@/app/club/intro1/components/ServiceCraft";
import Review from "@/components/containers/home-two/Review";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import CaseStudyDetails from "@/app/club/intro1/containers/CaseStudyDetails";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ServiceBanner />
        <ServiceTextSlider />
        <ServiceItems />
        {/*<ServiceNewsletter />*/}
        {/*<ServiceCraft />*/}
          <CaseStudyDetails/>
        {/*<Review />*/}
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
