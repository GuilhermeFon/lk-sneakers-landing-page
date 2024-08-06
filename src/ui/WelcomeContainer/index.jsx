import {useState, useEffect} from "react";
import WelcomeDesktop from "../../../public/videos/welcome.mp4";
import WelcomeMobile from "../../../public/videos/welcome-mobile.mp4";


const WelcomeContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.open("https://cae343-a4.myshopify.com/", "_blank");
  };

  return (
    <video
      src={isMobile ? WelcomeMobile : WelcomeDesktop}
      className="d-block w-100"
      style={{height: "calc(100% - 500px)"}}
      alt="sneakers-video"
      onClick={handleClick}
      autoPlay
      muted
      loop
    />
  );
};

export default WelcomeContainer;
