import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const VideoItem = ({ video, handleVideoSelect }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div
          className="card"
          style={{ width: "18rem" }}
          onClick={() => {
            handleVideoSelect(video);
            handleOpenModal();
          }}
        >
          <img
            className="card-img-top"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>
          </div>
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
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
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

export default VideoItem;
