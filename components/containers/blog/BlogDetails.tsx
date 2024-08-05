import Image from "next/image";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
// import { userComments } from "@/public/data/comments";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import Comments from "./Comments";

const BlogDetails = () => {
  return (
    <section className="section b-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          {/*<div className="col-12 col-lg-8">*/}
            <div className="col-12">
            <div className="b-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div>
              <div className="b-details-meta">
                <span className="cate">태그</span>
                <span className="time">2024.01.01(월)</span> -
                <span className="r-time">조회수 0회</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                  게시글의 제목입니다.
                </h2>
                <p>
                  어드민에서 저장하게 하기.(todo) 애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요. 우리나라는 애국가에 특별한 이름을 붙이지 않고 국가(國歌)로 사용하고 있어요.

                  오늘날 불리고 있는 애국가 노랫말은 우리나라가 외세의 침략으로 위기에 처해있던 시기(1907년 전후)에 나라 사랑하는 마음과 우리 민족의 자주의식을 북돋우기 위해 만들어진 것으로 보여져요.

                  그 후 여러 선각자의 손을 거쳐 현재와 같은 내용을 담게 되었는데 이 노랫말에 붙여진 곡조는 스코틀랜드 민요 ‘올드 랭 사인 (Auld Lang Syne)’ 이었답니다. 당시 해외에서 활동 중이던 작곡가 안익태(安益泰) 선생은 애국가에 남의 나라 곡을 붙여 부르는 것을 안타깝게 여겨 1935년에 오늘날의 애국가를 작곡하였다고 해요.

                  1948년 대한민국 정부가 수립된 이후 현재의 애국가가 정부의 공식행사에서 불려지고, 교과서에도 실리면서 전국적으로 불려지기 시작했답니다.

                  한 세기 가까운 세월 동안 슬플 때나 기쁠 때나 우리 겨레와 운명을 같이 해 온 애국가를 부를 때마다 우리 모두 선조들의 나라 사랑 정신을 새롭게 되새겨보아요.
                </p>
                <p>
                  애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요. 우리나라는 애국가에 특별한 이름을 붙이지 않고 국가(國歌)로 사용하고 있어요.

                  오늘날 불리고 있는 애국가 노랫말은 우리나라가 외세의 침략으로 위기에 처해있던 시기(1907년 전후)에 나라 사랑하는 마음과 우리 민족의 자주의식을 북돋우기 위해 만들어진 것으로 보여져요.

                  그 후 여러 선각자의 손을 거쳐 현재와 같은 내용을 담게 되었는데 이 노랫말에 붙여진 곡조는 스코틀랜드 민요 ‘올드 랭 사인 (Auld Lang Syne)’ 이었답니다. 당시 해외에서 활동 중이던 작곡가 안익태(安益泰) 선생은 애국가에 남의 나라 곡을 붙여 부르는 것을 안타깝게 여겨 1935년에 오늘날의 애국가를 작곡하였다고 해요.

                  1948년 대한민국 정부가 수립된 이후 현재의 애국가가 정부의 공식행사에서 불려지고, 교과서에도 실리면서 전국적으로 불려지기 시작했답니다.

                  한 세기 가까운 세월 동안 슬플 때나 기쁠 때나 우리 겨레와 운명을 같이 해 온 애국가를 부를 때마다 우리 모두 선조들의 나라 사랑 정신을 새롭게 되새겨보아요.
                </p>
              </div>
              <div className="text-group slide-top">
                <ol className="mt-0">
                  <li>
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                  <li>
                    {" "}
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                  <li>
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                  <li>
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                  <li>
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                  <li>
                    {" "}
                    태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다
                  </li>
                </ol>
              </div>
              <div className="img-group">
                <div className="poster-img mb-0 slide-top">
                  <Image src={one} alt="Image" priority/>
                </div>
                <div className="poster-img mb-0 slide-top">
                  <Image src={two} alt="Image" priority/>
                </div>
                <div className="poster-img mb-0 slide-top">
                  <Image src={one} alt="Image" priority/>
                </div>
              </div>
              {/*<div className="b-comment">*/}
              {/*  <h3 className="title-animation fw-7 text-white mt-12">*/}
              {/*    Comments*/}
              {/*  </h3>*/}
              {/*  <div className="b-comment__wrapper">*/}
              {/*    {userComments.map((item) => {*/}
              {/*      return <Comments key={item.id} item={item} />;*/}
              {/*    })}*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-comment slide-top">*/}
              {/*  <h3 className="fw-7 title-animation text-white">*/}
              {/*    댓글을 남겨주세요*/}
              {/*  </h3>*/}
              {/*  <form action="#" method="post">*/}
              {/*    <div className="input-group">*/}
              {/*      <div className="input-single">*/}
              {/*        <input*/}
              {/*          type="text"*/}
              {/*          name="a-name"*/}
              {/*          id="aName"*/}
              {/*          placeholder="Your Name"*/}
              {/*          required*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div className="input-single">*/}
              {/*        <input*/}
              {/*          type="email"*/}
              {/*          name="a-email"*/}
              {/*          id="aemail"*/}
              {/*          placeholder="Your Email"*/}
              {/*          required*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="input-single">*/}
              {/*      <textarea*/}
              {/*        name="a-comment"*/}
              {/*        id="aComment"*/}
              {/*        cols={30}*/}
              {/*        rows={10}*/}
              {/*        placeholder="Write Your Comment"*/}
              {/*      ></textarea>*/}
              {/*    </div>*/}
              {/*    <div className="section__content-cta">*/}
              {/*      <button type="submit" className="btn btn--primary">*/}
              {/*        Submit Now*/}
              {/*      </button>*/}
              {/*    </div>*/}
              {/*  </form>*/}
              {/*</div>*/}
            </div>
          </div>
          {/*<div className="col-12 col-lg-4">*/}
          {/*  /!*<BlogDetailsSidebar />*!/*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
