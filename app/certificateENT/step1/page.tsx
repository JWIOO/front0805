import Header from "@/components/layout/header/Header";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Processline from "@/components/certificate/Processline";
import Informationbox from "@/components/certificate/Informationbox";
import StepWrapper from "@/components/certificate/StepWrapper";
import ButtonStep from "@/components/certificate/ButtonStep";

const page = () => {

  return (
    <div className="my-app">
      <Header />
      <StepWrapper>
        <Processline step={1} />
        <Informationbox text={'필수 커리큘럼 수강 면제 대상입니다. :)'} />
        <ButtonStep text={'다음'} nowStep={1} type={'ENT'} />
      </StepWrapper>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
