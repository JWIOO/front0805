import Link from "next/link";

const ErrorSection = () => {
  return (
    <section className="section error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center mb-0">
              <h2 className="title title-animation mt-12">
                앗! 원하시는 페이지를 찾을 수 없어요 🥲
              </h2>
              <p>
                24시간 이내에 해결되지 않을시, 관리자에게 문의주세요!
              </p>
              <div className="section__cta">
                <Link href="/" className="btn btn--primary">
                  홈으로 돌아가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
