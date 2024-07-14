const CartSummary = ({ data }) => {
  const totalPrice = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  return (
    <div className="h-fit col-span-2 w-full shadow-md self-start bg-gray-50">
      <div className="p-4">
        <h4 className="text-gray-800 text-lg pb-4 mb-4 font-medium uppercase border-b">
          order summary
        </h4>
        <div className="space-y-2">
          {data?.items?.length > 0 &&
            data?.items?.map((item) => (
              <div key={item._id} className="flex justify-between">
                <div className="flex gap-x-2">
                  <p className="text-gray-600">x{item?.quantity}</p>
                  <h5 className="text-gray-800 font-medium truncate w-32">
                    {item?.product_id?.name}
                  </h5>
                </div>
                <p className="text-gray-800 font-medium">
                  ${item?.product_id?.price}
                </p>
              </div>
            ))}
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>subtotal</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
          <p className="font-semibold">Total</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded-b uppercase font-semibold">
        checkout
      </button>
    </div>
  );
};

export default CartSummary;
