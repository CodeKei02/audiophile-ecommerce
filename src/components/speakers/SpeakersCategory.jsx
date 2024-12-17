import "../../css/components/card_category.css";
import { SpeakerProduct1, SpeakerProduct2 } from "../../index.js";

export const SpeakersCategory = () => {
  return (
    <div className="cards-container">
      <SpeakerProduct1
        countClass="d-none"
        btnClass1="d-flex"
        btnClass2="d-none"
      />
      <SpeakerProduct2
        countClass="d-none"
        btnClass1="d-flex"
        btnClass2="d-none"
      />
    </div>
  );
};
