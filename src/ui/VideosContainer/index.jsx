import VideoComponent from "./VideoComponent";
import Dunk from "../../../public/videos/dunk.mp4";
import NewBalance from "../../../public/videos/new-balance.mp4";
import OffWhite from "../../../public/videos/off-white.mp4";
import Samba from "../../../public/videos/samba.mp4";

function App() {
  return (
    <>
      <VideoComponent
        data={Dunk}
        subtitle={"Nike Dunk Low"}
        description={
          'O Nike SB Dunk Low “Green Apple”, parte do "Fruit Pack" lançado em junho de 2022, apresenta um design de verão com couro creme e sobreposições de camurça verde maçã. Destacam-se o Swoosh vermelho berry, o logotipo da Nike bordado no calcanhar e uma estampa de cereja na aba interna da língua. A palmilha conta com amortecimento Zoom Air no calcanhar, e a sola de borracha bordô proporciona tração durável.'
        }
        reverse={false}
        link={"https://lksneakers.com/collections/dunk"}
      />
      <VideoComponent
        data={NewBalance}
        subtitle={"New Balance"}
        description={
          "Os tênis New Balance são amplamente reconhecidos por sua combinação de conforto excepcional, suporte confiável e design inovador. Fundada em 1906, a marca tem uma longa tradição de criar calçados que atendem a diversas necessidades, desde o desempenho atlético até o uso casual diário."
        }
        reverse={true}
        link={"https://lksneakers.com/collections/new-balance"}
      />
      <VideoComponent
        data={OffWhite}
        subtitle={"Off White"}
        description={
          "Os tênis da OFF-WHITE são a combinação perfeita de alta moda e design inovador, marcando presença no cenário da moda urbana e streetwear. Fundada por Virgil Abloh, a marca é conhecida por sua abordagem distintiva que mistura elementos de alta costura com um estilo avant-garde e descontraído."
        }
        reverse={false}
        link={"https://lksneakers.com/collections/off-white"}
      />
      <VideoComponent
        data={Samba}
        subtitle={"Adidas Samba OG"}
        description={
          "O AD Originals Samba OG é um tênis icônico da adidas que combina estilo e conforto. Com o seu design clássico, ele proporciona uma performance excepcional e garante uma pisada macia e amortecida. Ideal para quem busca um calçado versátil e durável, perfeito para usar no dia a dia ou durante a prática de esportes."
        }
        reverse={true}
        link={"https://lksneakers.com/collections/samba"}
      />
    </>
  );
}

export default App;
