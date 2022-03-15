import { useEffect, useState } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const json = await (
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCqenmgGnN_EMT9RztOd3N5UqCbk5vZCbI"
      )
    ).json();
    setVideos(json.items);
    setLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <Header />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
