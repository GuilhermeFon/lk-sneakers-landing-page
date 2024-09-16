import VideosContainer from "./ui/VideosContainer";
import WelcomeContainer from "./ui/WelcomeContainer";
import HeaderContainer from "./ui/HeaderContainer";
import WelcomeFooterDesktop from "../public/videos/welcome.webm";
import WelcomeFooterMobile from "../public/videos/welcome-mobile.webm";
import WelcomeHeadDesktop from "../public/videos/welcome-head.webm";
import WelcomeHeadMobile from "../public/videos/welcome-head-mobile.webm";

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
