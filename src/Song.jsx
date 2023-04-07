const Song = ({ img, title, duration, link, lyric }) => {
  return (
    <div className="song">
      <a target="_blank" href={link}>
        <img src={img} alt={title} className="img" />
      </a>
      <div className="song-info">
        <header>
          <h4>{title}</h4>
          <span>{duration}</span>
        </header>
        <p>{lyric}</p>
      </div>
    </div>
  );
};
export default Song;
