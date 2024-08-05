import NavigationMenu from "./ui/NavigationMenu";
// import HomeContainer from "./ui/HomeContainer";
import VideosContainer from "./ui/VideosContainer";

function App() {
  return (
    <div style={{backgroundColor: "#121316"}}>
      <NavigationMenu />
      {/* <HomeContainer /> */}
      <VideosContainer />
    </div>
  );
}

export default App;
