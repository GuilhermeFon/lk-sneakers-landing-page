import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
`;

export const Video = styled.video`
  width: 50%;
  height: 100%;
  border-radius: 50px;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  color: #ffff;
  font-weight: 800;
  font-size: 48px;
`;

export const Description = styled.p`
  color: #ffff;
`;
