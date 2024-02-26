import React, { useEffect, useState } from "react";

const API = "AIzaSyCYBu9TtXBNoVqX32RsSIe5ZNIlT1DMA68";
const channelId = "UCAkPt3qoHX1Z8uS1_-0kmGA";

var fetchUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`;

export const YtPlaylist = () => {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
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
            <img src={item.snippet.thumbnails.high.url} width="300px" alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default YtPlaylist;
