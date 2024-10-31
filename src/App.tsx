import { Header } from './Components/Header/Header';
import { LangToggle } from './Components/LangToggle/Langtoggle';
// import videoUrl from './assets/video/video3.mp4';
// import imgUrl from './assets/images/111.jpg';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="container">
      <LangToggle />
      <Header />
      {/* <video
        className="video"
        loop
        autoPlay
        poster={imgUrl}
        src={videoUrl}
      ></video> */}
    </div>
  );
};
