import SignInSection from "@/components/containers/authentication/SignInSection";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import SignUpSection from "@/components/containers/authentication/SignUpSection";

const page = () => {
    return (
        <div className="my-app">
            <main>
                {/* <SignInSection /> */}
                {/*To Do: 회원가입 페이지 따로 만들어서 연결하기*/}
                {/*<SignUpSection />*/}
            </main>
            <SignUpSection />
            <InitCustomCursor />
            <ScrollProgressButton />
            <Animations />
        </div>
    );
};

export default page;
