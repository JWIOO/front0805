import Header from "@/components/layout/header/Header";
import ServiceBanner from "./components/ServiceBanner";
import ServiceTextSlider from "@/components/containers/service/ServiceTextSlider";
import ServiceItems from "@/app/club/intro3/components/ServiceItems";

import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import CaseStudyDetails from "@/app/club/intro3/containers/CaseStudyDetails";

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

      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
