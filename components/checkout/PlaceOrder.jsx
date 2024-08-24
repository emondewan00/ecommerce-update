"use client";
const PlaceOrder = () => {
  const onClick = () => {
    const btn = document.getElementById("submitBtn");
    btn.click();
  };
  return (
    <button
      onClick={onClick}
      className="w-full py-2 bg-blue-500 text-white rounded-b uppercase font-semibold inline-block text-center"
    >
      Place Order
    </button>
  );
};

export default PlaceOrder;
