import { findOrderById } from "@/queries/order";
import Link from "next/link";

const Invoice = async ({ params: { id } }) => {
  const order = await findOrderById(id);

  if (!order.status) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold text-red-500">Order not found.</h1>
      </div>
    );
  }
  const { data, status } = order;
  const { name, city, country, phone, postcode, address } =
    data.shippingAddress;
  const { products, totalPrice, createdAt } = data;

  return (
    <div className="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto my-10  overflow-x-auto">
      <div className="min-w-[700px] shadow mb-4">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex justify-between">
            <div className="my-auto">
              <h1 className="text-4xl font-bold text-blue-500">PORTO</h1>
              <p className="indent-10 font-bold text-sm text-blue-500 -mt-2">
                eCommerce
              </p>
            </div>
            <div className="text-end">
              <h2 className="text-3xl font-semibold text-gray-800">
                Invoice #
              </h2>
              <span className="mt-1 block text-gray-500 uppercase">
                {id.slice(16, 24)}
              </span>

              <address className="mt-1 not-italic text-gray-800">
                Fatehpur
                <br />
                Matlab (Uttar)
                <br />
                Chandpur, Bangladesh
                <br />
              </address>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

              <p className="">{phone}</p>

              <address className="mt-2 not-italic text-gray-500">
                {city},{postcode},
                <br />
                {country},
                <br />
              </address>
            </div>

            <div className="text-end space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Invoice date:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {new Date(createdAt).toLocaleString()}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="border border-gray-200 p-4 rounded-lg space-y-4">
              <div className="grid grid-cols-5">
                <div className="col-span-2 text-xs font-medium text-gray-500 uppercase">
                  Item
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase">
                  Qty
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase">
                  Rate
                </div>
                <div className="text-end text-xs font-medium text-gray-500 uppercase">
                  Amount
                </div>
              </div>

              <div className="border-b border-gray-200"></div>
              {products.map((product) => (
                <div key={product._id}>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-2">
                      <p className="font-medium text-gray-800">
                        {product.productId.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">{product.quantity}</p>
                    </div>
                    <div>
                      <p className="text-gray-800">{product.discount_price}</p>
                    </div>
                    <div>
                      <p className="text-end text-gray-800">
                        ${product.discount_price * product.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 last:border-0"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-2xl text-end space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Subtotal:
                  </dt>
                  <dd className="col-span-2 text-gray-500">${totalPrice}</dd>
                </dl>
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500">$00</dd>
                </dl>
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Total:
                  </dt>
                  <dd className="col-span-2 text-gray-500">${totalPrice}</dd>
                </dl>
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Amount Paid:
                  </dt>
                  <dd className="col-span-2 text-gray-500">$0.00</dd>
                </dl>
                <dl className="grid grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Due Balance:
                  </dt>
                  <dd className="col-span-2 text-gray-500">${totalPrice}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Thank you for your business! We appreciate your trust in us and
              look forward to serving you again.
            </p>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-500">
              If you have any questions concerning this invoice, contact{" "}
              <a
                href="mailto:emon.hossain@gmail.com"
                className="hover:underline text-gray-800"
              >
                emon.hossain1004@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
