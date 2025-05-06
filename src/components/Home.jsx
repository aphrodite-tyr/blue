import Card from "./Card";
import Chat from "./Chat";
import Countdown from "./Countdown";
import Cover from "./Cover";
import Cover2 from "./Cover2";
import Gallery2 from "./Gallery2";
import MapView from "./MapView";
import Timeline from "./Timeline";
import Quotes from "./Quotes";
import background from '../assets/background.png';
import backgroundcover from '../assets/backgroundcover.jpg';

function Home() {
  return (
    <div className="relative min-h-screen flex justify-center xl:justify-start">
      
      {/* Background hanya tampil di layar XL ke atas */}
      <div className="hidden xl:block fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover"
          style={{ backgroundImage: `url(${backgroundcover})`, backgroundSize:'100%' }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Konten utama */}
      <div
  className="w-full min-h-screen shadow-lg bg-fixed bg-cover bg-no-repeat
  max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[480px] custom-bg-size"
  style={{ backgroundImage: `url(${background})` }}
>

        <Cover />
        <Quotes />
        <Cover2 />
        <Countdown />
        <Gallery2 />
        <MapView />
        <Timeline />
        <Chat />
        <Card />
      </div>
    </div>
  );
}

export default Home;
