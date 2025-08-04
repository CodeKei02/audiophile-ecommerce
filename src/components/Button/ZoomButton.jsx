export const ZoomButton = ({ openModal }) => {
  return (
    <button className="btn-zoom" onClick={openModal}>
      <img
        src="../../../public/images/zoom-in.png"
        alt="zoom"
        className="icon-zoom"
        width="20"
      />
    </button>
  );
};
