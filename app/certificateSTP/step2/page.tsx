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
import Writingform from "@/components/certificate/Writingform";

const page = () => {

  return (
    <div className="my-app">
      <Header />
      <StepWrapper>
        <Processline step={2} />
        <Informationbox text={'필기 시험 면제이며, 이를 증빙할 수있는 클럽 수료 증명서를 제출해주세요.'} />
        <Subtext text={'어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. '} />
        <Writingform />
        <ButtonStep text={'다음'} nowStep={2} type={'STP'} />
      </StepWrapper>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
