import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to load...</h1>
        <br></br>
        <p className="text-center max-w-2xl " style={{ fontSize: "25px" }}>
          Use the API to search for videos matching specific search terms,
          topics, locations, publication dates, and much more. The APIs
          search.list method also supports searches for playlists and channels.
          With the YouTube Data API, you can add a variety of YouTube features
          to your application. Use the API to upload videos, manage playlists
          and subscriptions, update channel settings, and more.
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div className="w-2/3 flex flex-col items-center xed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <div className="ui embed w-full flex justify-center bg-gray-200 p-2 rounded">
          <iframe
            className="mb-4 my-4 w-full h-auto rounded"
            height="460"
            style={{
              aspectRatio: "640/360",
              objectFit: "cover",
            }}
            src={videoSrc}
            allowFullScreen
            title="Video player"
            width="690"
          />
        </div>
        <div className="ui segment mt-4">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
