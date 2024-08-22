import { auth } from "@/auth";
import { getUser } from "@/queries/user";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const AddressBook = async () => {
  const session = await auth();
  const user = await getUser(session.user.id);

  return (
    <div className="p-6">
      <div className="flex items-center gap-x-2 ">
        <FaLocationDot className="text-xl" />
        <h1 className="text-2xl font-bold">Address</h1>
      </div>
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {user?.addresses.length > 1 &&
          user?.addresses?.map((address) => (
            <div key={address._id} className="p-4 shadow">
              <p className="capitalize">
                <strong>Name:</strong> {address.name}
              </p>
              <p>
                <strong>Address:</strong> {address.address}
              </p>
              <p>
                <strong>City:</strong> {address.city}
              </p>
              <p>
                <strong>Country:</strong> {address.country}
              </p>
              <p>
                <strong>Postcode:</strong> {address.postcode}
              </p>
              <p>
                <strong>Phone:</strong> {address.phone}
              </p>
              {address.isShippingDefault && (
                <p className="text-green-500"> Default shipping address </p>
              )}
              <div className="flex justify-between items-center">
                <Link
                  href="addresses/edit/1"
                  className="text-sky-600 font-semibold mt-2 inline-block"
                >
                  EDIT YOUR ADDRESS →
                </Link>
                <button className="bg-red-400 px-3 py-1 rounded text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex mt-4">
        <Link
          href="addresses/create"
          className="bg-blue-500 px-4 py-2 rounded text-white hover:scale-105 transition-all duration-150 delay-100 ml-auto"
        >
          Add Address
        </Link>
      </div>
    </div>
  );
};

export default AddressBook;
