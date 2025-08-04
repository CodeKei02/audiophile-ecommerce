import "../../css/components/overlay.css";
export const Overlay = ({ display, style }) => {
  return <div className={`overlay ${display}`} style={style}></div>;
};
