import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
//  with custom hook
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Data Stucture");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

// without custom hook

// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     onSearchSubmit("Data Structure");
//   }, []);

//   const onSearchSubmit = async (term) => {
//     const { data } = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     setSelectedVideo(data.items[0]);
//     setVideos(data.items);
//   };

//   return (
//     <div className="ui container">
//       <SearchBar onSubmit={onSearchSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     videos: [],
//     selectedVideo: null,
//   };

//   componentDidMount() {
//     this.onSearchSubmit("Data Structure");
//   }

//   onSearchSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
// return (
//   <div className="ui container">
//     <SearchBar onSubmit={this.onSearchSubmit} />
//     <div className="ui grid">
//       <div className="ui row">
//         <div className="eleven wide column">
//           <VideoDetail video={this.state.selectedVideo} />
//         </div>
//         <div className="five wide column">
//           <VideoList
//             videos={this.state.videos}
//             onVideoSelect={this.onVideoSelect}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );
//   }
// }

export default App;
