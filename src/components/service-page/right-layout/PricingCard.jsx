const PricingCard = ({service}) => {
  return (
    <div>
      {/* Price Title */}
      <h1 className="text-3xl font-bold mb-8">Price ${service.price}</h1>

      {/* Proceed Checkout Button */}
      <div className="flex justify-center items-center bg-primary text-white font-semibold py-4">
        Proceed Checkout
      </div>
    </div>
  );
};

export default PricingCard;
