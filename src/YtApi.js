import React, { useEffect, useState } from "react";

const API = "AIzaSyCYBu9TtXBNoVqX32RsSIe5ZNIlT1DMA68";
const channelId = "UCmFt1y9cbHx3amPRctMEyvA";

var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`;

export const YtApi = () => {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          videoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllvideos(result);
      });
  }, []);

  console.log(allvideos);
  return (
    <div>
      {allvideos.map((item) => {
        return (
          <div>
            <p>{item.snippet.title}</p>
            <iframe
              width="560"
              height="315"
              src={item.videoLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
export default YtApi;