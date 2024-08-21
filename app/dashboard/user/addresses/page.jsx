import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const AddressBook = () => {
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
        <div className="p-4 shadow">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Address:</strong> Wall Street
          </p>
          <p>
            <strong>City:</strong> California
          </p>
          <p>
            <strong>Country:</strong> United States (US)
          </p>
          <p>
            <strong>Postcode:</strong> 92020
          </p>
          <p>
            <strong>Phone:</strong> 1112223334
          </p>
          <Link
            href="addresses/edit/1"
            className="text-sky-600 font-semibold mt-2 inline-block"
          >
            EDIT YOUR ADDRESS →
          </Link>
        </div>
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
