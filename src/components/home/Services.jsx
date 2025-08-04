import "../../css/home/services.css";
const sectionServices = [
  {
    id: 1,
    image: "/images/home/services/send.png",
    title: "Free Shipping",
    description: "Free shipping on all orders",
  },
  {
    id: 2,
    image: "/images/home/services/smile.png",
    title: "Customer Service",
    description:
      "We are available Monday through Friday to answer your questions",
  },
  {
    id: 3,
    image: "/images/home/services/wallet.png",
    title: "Secure Payment",
    description: "Your payment information is processed securely",
  },
];

export const Services = () => {
  return (
    <div className="services-container page-container">
      <div className="services-content">
        {sectionServices.map((service) => (
          <div className="service" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
