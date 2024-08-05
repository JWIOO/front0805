import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import CaseStudyDetails from "@/app/info/guide2/containers/CaseStudyDetails";
import RelatedCaseStudy from "@/components/containers/case-study/RelatedCaseStudy";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="수험자 가이드" />
        <CaseStudyDetails />
        {/*<RelatedCaseStudy />*/}
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
