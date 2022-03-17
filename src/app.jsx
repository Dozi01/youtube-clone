import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    youtube // Make promise prettier
      .mostPopular()
      .then(setVideos);
  };

  const search = (query) => {
    youtube //
      .search(query)
      .then(setVideos);
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
