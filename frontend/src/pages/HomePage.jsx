import Banner from "../components/Banner";
import SignInModal from "../components/SingModal";
import { Fragment } from "react";
import SignupModal from "../components/SignUpModal";
function HomePage() {
  return (
    <Fragment>
      <Banner />
      <SignInModal />
      <SignupModal />
    </Fragment>
  );
}

export default HomePage;
