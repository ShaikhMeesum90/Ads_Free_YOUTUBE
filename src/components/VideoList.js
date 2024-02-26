import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  return (
    <div className="row">
      {videos.map((video, index) => (
        <div key={index} className="col-md-4 mb-4 my-4">
          <VideoItem video={video} handleVideoSelect={handleVideoSelect} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
