import SignInSection from "@/components/containers/authentication/SignInSection";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import SignUpSection from "@/components/containers/authentication/SignUpSection";
import SignAgree from "@/components/containers/authentication/SignAgree";

const page = () => {
    return (
        <div className="my-app">
            <main>
                <SignAgree />
            </main>
            <InitCustomCursor />
            <ScrollProgressButton />
            <Animations />
        </div>
    );
};

export default page;