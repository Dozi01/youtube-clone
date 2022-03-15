import { useEffect, useState } from "react";
import Loading from "./Loading";

function Video() {
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
  console.log(videos);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {videos.map((video) => (
            <li>
              <img src={video.snippet.thumbnails.medium.url} />
              <div>{video.snippet.title}</div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Video;
