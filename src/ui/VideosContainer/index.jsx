import VideoComponent from "./VideoComponent";
import Airmax from "../../../public/videos/airmax.mp4";
import Airmax97 from "../../../public/videos/airmax97.mp4";
import Nmd from "../../../public/videos/nmd.mp4";
import Samba from "../../../public/videos/samba.mp4";

function App() {
  return (
    <>
      <VideoComponent
        data={Airmax}
        subtitle={"Airmax"}
        description={
          "Nada tão legal, nada tão confortável, nada tão comprovado. O Nike Air Max 90 permanece fiel às suas raízes de corrida do OG, com a emblemática sola Waffle, sobreposições costuradas e detalhes clássicos em TPU. As cores clássicas celebram seu visual renovado, enquanto o amortecimento Max Air aumenta o conforto da viagem."
        }
        reverse={false}
      />
      <VideoComponent
        data={Nmd}
        subtitle={"Nmd"}
        description={
          "Baseado nos tênis de corrida e feito para as aventuras do dia a dia. Com padronagem granulada na entressola, este tênis adidas NMD_R1 é uma atualização do modelo original inspirado nos anos 80. O cabedal elástico de malha envolve os pés e garante conforto total. Você não terá nenhum problema se precisar andar o dia todo, graças ao solado de borracha aderente e ao retorno de energia da entressola BOOST sob os pés."
        }
        reverse={true}
      />
      <VideoComponent
        data={Airmax97}
        subtitle={"Airmax97"}
        description={
          "Moderno. Estiloso. Simples. O design inspirado em água do Air Max 97 flui, quer você esteja correndo ou em uma noite na cidade. Amortecimento Nike Air de comprimento total permite correr com conforto de desempenho."
        }
        reverse={false}
      />
      <VideoComponent
        data={Samba}
        subtitle={"Samba"}
        description={
          "O AD Originals Samba OG é um tênis icônico da adidas que combina estilo e conforto. Com o seu design clássico, ele proporciona uma performance excepcional e garante uma pisada macia e amortecida. Ideal para quem busca um calçado versátil e durável, perfeito para usar no dia a dia ou durante a prática de esportes."
        }
        reverse={true}
      />
    </>
  );
}

export default App;
