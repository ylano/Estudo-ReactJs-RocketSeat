import "./styles.css";
import Header from "./components/header";
import Section from "./components/section";
import ListItem from "./components/listItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/me/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://th.bing.com/th?id=OIP.X1Lr4Y83LwWgp8u3Apr2SQAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    alt: "Imagem de alanzoka",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://i.pinimg.com/originals/15/8c/7d/158c7d03eef44e3edf57291d3f67721b.png",
    alt: "Imagem de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: "Twitch do Maik Brito",
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: "Twitter do Maik Brito",
  },
  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Maik Brito",
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: "Canal do youtube do Maik Brito",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gameListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
