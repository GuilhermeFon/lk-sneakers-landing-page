import VideosContainer from "./ui/VideosContainer";
import WelcomeContainer from "./ui/WelcomeContainer";
import HeaderContainer from "./ui/HeaderContainer";
import WelcomeFooterDesktop from "../public/videos/welcome.mp4";
import WelcomeFooterMobile from "../public/videos/welcome-mobile.mp4";
import WelcomeHeadDesktop from "../public/videos/welcome-head.mp4";
import WelcomeHeadMobile from "../public/videos/welcome-head-mobile.mp4";

function App() {
  return (
    <div style={{backgroundColor: "#121316"}}>
      <HeaderContainer />
      <WelcomeContainer
        WelcomeDesktop={WelcomeHeadDesktop}
        WelcomeMobile={WelcomeHeadMobile}
        Footer={false}
      />
      <VideosContainer />
      <WelcomeContainer
        WelcomeDesktop={WelcomeFooterDesktop}
        WelcomeMobile={WelcomeFooterMobile}
        Footer={true}
      />
    </div>
  );
}

export default App;
