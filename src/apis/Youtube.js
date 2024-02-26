import axios from "axios";

const KEY = "AIzaSyD4mb7uUsE82dLW38Kz8A6OP2jkroS-Wpw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 16,
    key: KEY,
  },
});
