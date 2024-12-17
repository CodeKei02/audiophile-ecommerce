import { HeadphonesProduct1, HeadphonesProduct2, HeadphonesProduct3 } from "../../index"
export const HeadphonesCategory = () => {
  return (
    <div className="cards-container">
      <HeadphonesProduct1 
        countClass="d-none"
        btnClass1="d-flex"
        btnClass2="d-none"
      />
      <HeadphonesProduct2 
        countClass="d-none"
        btnClass1="d-flex"
        btnClass2="d-none"
      />
      <HeadphonesProduct3  
        countClass="d-none"
        btnClass1="d-flex"
        btnClass2="d-none"
      />
    </div>
  );
};
