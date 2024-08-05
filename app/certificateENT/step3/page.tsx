import Header from "@/components/layout/header/Header";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Processline from "@/components/certificate/Processline";
import Informationbox from "@/components/certificate/Informationbox";
import StepWrapper from "@/components/certificate/StepWrapper";
import ButtonStep from "@/components/certificate/ButtonStep";
import Subtext from "@/components/certificate/Subtext";
import Writingform2 from "@/components/certificate/Writingform2";

const page = () => {

  return (
    <div className="my-app">
      <Header />
      <StepWrapper>
        <Processline step={3} />
        <Informationbox text={'실기 시험 면제대상입니다. 이를 증빙할 수 있는 포트폴리오를 제출해주세요. ~~'} />
        <Subtext text={'어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. '} />
        <Writingform2 />
        <ButtonStep text={'다음'} nowStep={3} type={'ENT'} />
      </StepWrapper>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
