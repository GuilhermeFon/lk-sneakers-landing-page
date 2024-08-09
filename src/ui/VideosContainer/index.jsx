import VideoComponent from "./VideoComponent";
import Dunk from "../../../public/videos/dunk.mp4";
import Airmax97 from "../../../public/videos/airmax97.mp4";
import Nmd from "../../../public/videos/nmd.mp4";
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
        link={"https://cae343-a4.myshopify.com/collections/samba"}
      />
      <VideoComponent
        data={Nmd}
        subtitle={"Adidas NMD_R1"}
        description={
          "Baseado nos tênis de corrida e feito para as aventuras do dia a dia. Com padronagem granulada na entressola, este tênis adidas NMD_R1 é uma atualização do modelo original inspirado nos anos 80. O cabedal elástico de malha envolve os pés e garante conforto total. Você não terá nenhum problema se precisar andar o dia todo, graças ao solado de borracha aderente e ao retorno de energia da entressola BOOST sob os pés."
        }
        reverse={true}
        link={"https://cae343-a4.myshopify.com/collections/samba"}
      />
      <VideoComponent
        data={Airmax97}
        subtitle={"Nike Airmax 97"}
        description={
          "Moderno. Estiloso. Simples. O design inspirado em água do Air Max 97 flui, quer você esteja correndo ou em uma noite na cidade. Amortecimento Nike Air de comprimento total permite correr com conforto de desempenho."
        }
        reverse={false}
        link={"https://cae343-a4.myshopify.com/collections/samba"}
      />
      <VideoComponent
        data={Samba}
        subtitle={"Adidas Samba OG"}
        description={
          "O AD Originals Samba OG é um tênis icônico da adidas que combina estilo e conforto. Com o seu design clássico, ele proporciona uma performance excepcional e garante uma pisada macia e amortecida. Ideal para quem busca um calçado versátil e durável, perfeito para usar no dia a dia ou durante a prática de esportes."
        }
        reverse={true}
        link={"https://cae343-a4.myshopify.com/collections/samba"}
      />
    </>
  );
}

export default App;
