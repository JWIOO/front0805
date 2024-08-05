import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogPoster from "./components/BlogPoster";
import BlogItems from "./components/BlogItems";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import NewsDetails from "@/app/news/notice/containers/NewsDetails";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="공지사항" />
        {/*<BlogPoster />*/}
        {/*  <NewsDetails/>*/}
        <BlogItems />
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
