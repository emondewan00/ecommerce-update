const AddressBook = () => {
  return (
    <div class="p-6">
      <h2 class="text-lg font-semibold mb-2">
        <span class="inline-flex items-center">
          <svg
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            <path d="M10 4a6 6 0 00-6 6 6 6 0 0012 0 6 6 0 00-6-6zm0 10a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
          Addresses
        </span>
      </h2>
      <p class="mb-4">
        The following addresses will be used on the checkout page by default.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4">
          <h3 class="font-semibold mb-2">Billing Address</h3>
          <hr class="mb-2" />
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Company:</strong> Conia
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
          <a href="#" class="text-sky-600 font-semibold mt-2 inline-block">
            EDIT YOUR BILLING ADDRESS →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
