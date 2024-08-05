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
        <Processline step={4} />
        <Informationbox text={'모든 제출 사항이 확인되었습니다. 최종 검토 후 자격증 취득 가능 여부는 1-7일 이내 통보 예정입니다.'} />
        <Subtext text={'어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. 어떠한 멘트들이 들어갈 예정입니다. '} />
        <ButtonStep text={'완료'} nowStep={4} type={'STP'} />
      </StepWrapper>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
