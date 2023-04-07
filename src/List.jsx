import Song from "./Song";

const List = ({ stran }) => {
  return (
    <div className="container">
      {stran.map((song) => {
        return <Song key={song.id} {...song} />;
      })}
    </div>
  );
};
export default List;
