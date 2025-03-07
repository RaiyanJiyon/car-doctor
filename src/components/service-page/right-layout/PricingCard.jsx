import Link from "next/link";

const PricingCard = ({ service }) => {
  return (
    <div>
      {/* Price Title */}
      <h1 className="text-3xl font-bold mb-8">Price ${service.price}</h1>

      {/* Proceed Checkout Button */}
      <Link href={`http://localhost:3000/checkout/${service._id}`} className="flex justify-center items-center bg-primary text-white font-semibold py-4">
        Proceed Checkout
      </Link>
    </div>
  );
};

export default PricingCard;
