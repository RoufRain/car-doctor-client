import { Link } from "react-router-dom";

const ServicesCard = ({ services }) => {
  const { _id, img, title, price } = services;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-[#FF3811] font-bold text-md">$Price : {price}</p>

        <Link to={`/checkout/${_id}`}>
          <button className="bg-[#FF3811] font-semibold w-30 rounded-md p-2">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
