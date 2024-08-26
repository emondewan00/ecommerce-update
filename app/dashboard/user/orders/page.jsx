import { auth } from "@/auth";
import { getOrdersByUserId } from "@/queries/order";
import Link from "next/link";

const OrderPage = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  const orders = await getOrdersByUserId(userId);

  return (
    <div className="w-full">
      <div className="mb-2">
        <h1 className="text-xl font-bold">Orders</h1>
        <p>You have {orders?.orders?.length} Orders.</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className=" text-left">
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Invoice</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="*:border-b ">
          {orders?.orders?.map((order, idx) => (
            <tr key={order._id} className="*:py-2">
              <td>
                <Link href={`/dashboard/user/order/${order._id}`}>
                  #{idx + 1}
                </Link>
              </td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td className="capitalize">{order.status}</td>
              <td>${order.totalPrice}</td>
              <td>
                <Link
                  href={`/invoice/${order._id}`}
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                >
                  Invoice
                </Link>
              </td>
              <td>
                <td>
                  <Link
                    href={"/"}
                    className="bg-blue-500 px-6 py-2 text-white inline-block rounded"
                  >
                    View
                  </Link>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
