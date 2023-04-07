const Singers = ({ singers, filterSongs }) => {
  return (
    <div className="btn-container">
      {singers.map((singer) => {
        return (
          <button
            type="button"
            key={singer}
            className="btn btn-singer"
            onClick={() => filterSongs(singer)}
          >
            {singer}
          </button>
        );
      })}
    </div>
  );
};
export default Singers;
