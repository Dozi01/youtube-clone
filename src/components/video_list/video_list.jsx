import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <div className={styles.container}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </div>
);

export default VideoList;
