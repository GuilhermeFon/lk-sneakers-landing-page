import Instagram from "../../assets/instagram.svg";
import Globe from "../../assets/globe.svg";
import Whatsapp from "../../assets/whatsapp.png";

const HeaderContainer = () => {
  const handleClickOnSite = () => {
    window.open("https://lksneakers.com/", "_blank");
  };

  const handleClickOnInstagram = () => {
    window.open("https://www.instagram.com/lksneakers__", "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "35px",
        backgroundColor: "#4C2986",
        padding: "10px",
        color: "#ffff",
        justifyContent: "center",
        gap: "20px",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClickOnInstagram}
        onMouseEnter={(e) =>
          (e.currentTarget.querySelector("span").style.textDecoration =
            "underline")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.querySelector("span").style.textDecoration = "none")
        }
      >
        <img src={Instagram} alt="instagram-logo" />
        <span
          style={{
            transition: "text-decoration 0.3s ease-in-out",
            color: "#fffb",
          }}
        >
          lksneakers__
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
          color: "#fffb",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.querySelector("span").style.textDecoration =
            "underline")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.querySelector("span").style.textDecoration = "none")
        }
        onClick={handleClickOnSite}
      >
        <img src={Globe} alt="globe-logo" />
        <span
          style={{
            transition: "text-decoration 0.3s ease-in-out",
          }}
        >
          lksneakers.com
        </span>
      </div>
      <a
        href="https://wa.me/+555391674023?text=Olá, vi alguns modelos interessantes na loja, poderia me enviar mais detalhes?"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={Whatsapp}
          alt="WhatsApp"
          style={{
            width: "55px",
            height: "55px",
            transition: "transform 0.3s ease",
          }}
        />
      </a>
    </div>
  );
};

export default HeaderContainer;
