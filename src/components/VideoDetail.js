import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const VideoDetail = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to load...</h1>
        <br />
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

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="w-2/3 flex flex-col items-center xed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          {/*<div className="ui embed w-full flex justify-center bg-gray-200 p-2 rounded">
            <iframe
              className="mb-4 my-4 w-full h-auto rounded"
              height="460"
              style={{
                aspectRatio: "16/9", // 16:9 aspect ratio
                objectFit: "cover",
              }}
              src={videoSrc}
              allowFullScreen
              title="Video player"
              width="690"
            />
            </div>*/}
          {/*<div className="ui segment mt-4">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>*/}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>View Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="embed-responsive embed-responsive-16by9"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              title="video"
              className="embed-responsive-item"
              src={videoSrc}
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoDetail;
