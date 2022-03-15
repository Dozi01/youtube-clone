import React from "react";
import styles from "./video_item.module.css";
function VideoItem(props) {
  const video = props.video.snippet;
  console.log(video);
  return (
    <li className={styles.container}>
      <img
        className={styles.thumbnail}
        src={video.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div>
        <div className={styles.title}>{video.title}</div>
        <div className={styles.channel}>{video.channelTitle}</div>
      </div>
    </li>
  );
}

export default VideoItem;
