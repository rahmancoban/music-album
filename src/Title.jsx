import { BsMusicPlayerFill } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";

const Title = ({ mainTitle }) => {
  return (
    <div className="title">
      <h1>{mainTitle || "Default Title"}</h1>
      <div className="icons">
        <span className="icon sol">
          <BsMusicNoteBeamed />
        </span>
        <span className="icon bas">
          <BsMusicPlayerFill />
        </span>
        <span className="icon guitar">
          <FaGuitar />
        </span>
      </div>
    </div>
  );
};
export default Title;
