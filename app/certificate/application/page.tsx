import Header from "@/components/layout/header/Header";
import ServiceBanner from "./components/ServiceBanner";
import ServiceItems from "./components/ServiceItems";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
        <main>
            <ServiceBanner/>

            <ServiceItems/>
            <div style={{marginBottom: '100px'}}></div>

        </main>
        <FooterTwo/>
        <InitCustomCursor/>
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
