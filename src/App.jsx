import { useState } from "react";
import Title from "./Title";
import data from "./songs";
import List from "./List";
import Singers from "./Singers";
import Footer from "./Footer";

const tempSongs = data.map((song) => song.singer);
const allSongs = ["all", ...new Set(tempSongs)];

function App() {
  const [songs, setSongs] = useState(data);
  const [singers, setSingers] = useState(allSongs);

  const filterSongs = (singer) => {
    if (singer === "all") {
      setSongs(data);
      return;
    }
    const filteredSongs = data.filter((item) => item.singer === singer);
    setSongs(filteredSongs);
  };

  return (
    <main>
      <Title mainTitle="Top List Songs" />
      <Singers singers={singers} filterSongs={filterSongs} />
      <List stran={songs} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
