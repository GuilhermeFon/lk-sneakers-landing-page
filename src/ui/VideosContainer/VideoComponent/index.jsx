import {Container, Description, Subtitle, TextContainer, Video} from "./styles";
import PropTypes from "prop-types";

const VideoContainer = ({data, subtitle, description, reverse}) => {
  return (
    <Container reverse={reverse}>
      <Video poster="image" preload="true" autoPlay muted loop>
        <source src={data} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};

VideoContainer.propTypes = {
  data: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default VideoContainer;
