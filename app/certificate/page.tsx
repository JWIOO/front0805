import Header from "@/components/layout/header/Header";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import EssentialWrapper from "@/components/certificate/EssentialWrapper";
import Image from "next/image";
import EssentialMain from "@/components/certificate/EssentialMain";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <EssentialWrapper>
        <EssentialMain />
      </EssentialWrapper>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
