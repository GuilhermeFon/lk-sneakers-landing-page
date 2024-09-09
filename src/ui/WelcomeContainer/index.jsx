import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const WelcomeContainer = ({WelcomeDesktop, WelcomeMobile, Footer}) => {
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
    window.open("https://lksneakers.com/", "_blank");
  };

  return (
    <div style={{position: "relative"}}>
      {!Footer && (
        <div
          style={{
            position: "absolute",
            color: "#fff",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
            whiteSpace: isMobile ? "normal" : "nowrap",
            textAlign: "center",
            cursor: "pointer",
            fontFamily: "tall",
          }}
          onClick={handleClick}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 500,
              lineHeight: 1.8,
            }}
          >
            CONHEÇA NOSSA LOJA
          </h1>
        </div>
      )}
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
    </div>
  );
};

WelcomeContainer.propTypes = {
  WelcomeDesktop: PropTypes.string,
  WelcomeMobile: PropTypes.string,
  Footer: PropTypes.bool,
};

export default WelcomeContainer;
