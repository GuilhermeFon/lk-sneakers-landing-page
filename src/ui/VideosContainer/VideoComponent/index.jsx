import {Container, Description, Subtitle, TextContainer, Video} from "./styles";
import PropTypes from "prop-types";

const VideoContainer = ({data, subtitle, description, reverse, link}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <Container reverse={reverse}>
      <Video poster="image" preload="true" autoPlay muted loop playsInline>
        <source src={data} type="video/webm" />
        Your browser does not support the video tag.
      </Video>
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <div className="d-flex justify-content-center my-4">
          <button
            style={{backgroundColor: "#4C2986", fontWeight: 500, color: "#fff"}}
            className="btn btn-lg"
            type="button"
            onClick={handleClick}
          >
            Ver Coleção
          </button>
        </div>
      </TextContainer>
    </Container>
  );
};

VideoContainer.propTypes = {
  data: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default VideoContainer;
