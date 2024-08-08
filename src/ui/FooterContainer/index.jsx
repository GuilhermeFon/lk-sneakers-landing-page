import Instagram from "../../assets/instagram.svg";

const WelcomeContainer = () => {
  // const handleClick = () => {
  //   window.open("https://cae343-a4.myshopify.com/", "_blank");
  // };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "200px",
        backgroundColor: "#4C2986",
        padding: "25px",
        color: "#ffff",
        flexDirection: "column",
      }}
    >
      <div>
        <img
          src={Instagram}
          alt="instagram-logo"
          style={{}}
        />
      </div>
      <p>© LK Sneakers</p>
    </div>
  );
};

export default WelcomeContainer;
