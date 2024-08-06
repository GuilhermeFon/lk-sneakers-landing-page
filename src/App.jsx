import VideosContainer from "./ui/VideosContainer";
import WelcomeContainer from "./ui/WelcomeContainer";

function App() {
  return (
    <div style={{backgroundColor: "#121316"}}>
      {/* <NavigationMenu /> */}
      {/* <HomeContainer /> */}
      <WelcomeContainer />
      <VideosContainer />
    </div>
  );
}

export default App;
