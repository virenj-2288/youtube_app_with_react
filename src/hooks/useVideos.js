import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); // use defaultSearchTerm inside [] because if we use outside variable we have to return it in inside [] .

  const search = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
  };

  return [videos, search]; // to written like this this is React Convention
  //   return { videos, search] }; we can also return like this to follow javaScript conventio
};

export default useVideos;
