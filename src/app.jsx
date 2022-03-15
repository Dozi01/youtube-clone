import { useEffect, useState } from "react";
import styles from "./app.module.css";
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

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=AIzaSyCqenmgGnN_EMT9RztOd3N5UqCbk5vZCbI`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className={styles.container}>
      <Header search={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
