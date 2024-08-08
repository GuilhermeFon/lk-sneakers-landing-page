import VideosContainer from "./ui/VideosContainer";
import WelcomeContainer from "./ui/WelcomeContainer";
import HeaderContainer from "./ui/HeaderContainer";

function App() {
  return (
    <div style={{backgroundColor: "#121316"}}>
      <HeaderContainer />
      <WelcomeContainer />
      <VideosContainer />
    </div>
  );
}

export default App;
