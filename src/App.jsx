import VideosContainer from "./ui/VideosContainer";
import WelcomeContainer from "./ui/WelcomeContainer";
import FooterContainer from "./ui/FooterContainer";

function App() {
  return (
    <div style={{backgroundColor: "#121316"}}>
      {/* <NavigationMenu /> */}
      {/* <HomeContainer /> */}
      <WelcomeContainer />
      <VideosContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
