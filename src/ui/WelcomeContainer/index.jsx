import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const WelcomeContainer = ({WelcomeDesktop, WelcomeMobile}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

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
      style={{cursor: "pointer"}}
      alt="sneakers-video"
      onClick={handleClick}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

WelcomeContainer.propTypes = {
  WelcomeDesktop: PropTypes.string,
  WelcomeMobile: PropTypes.string,
};

export default WelcomeContainer;
