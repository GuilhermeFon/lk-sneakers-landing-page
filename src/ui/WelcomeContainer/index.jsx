import Welcome from "../../../public/videos/welcome.mp4";

const handleClick = () => {
  window.open("https://cae343-a4.myshopify.com/", "_blank");
};

const WelcomeContainer = () => {
  return (
    <video
      src={Welcome}
      className="d-block w-100"
      style={{height: "calc(100% - 500px)", cursor: "pointer"}}
      alt="sneakers-video"
      onClick={handleClick}
      autoPlay
      muted
      loop
    />
  );
};

export default WelcomeContainer;
