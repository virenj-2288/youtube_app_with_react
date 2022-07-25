import axios from "axios";

const KEY = "AIzaSyCI09pcuSpEFEeU-F7eaB0BJY_BcgFfaWI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
