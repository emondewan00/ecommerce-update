const CreateAddress = () => {
  return (
    <div className="px-8">
      <p className="font-bold">Add address</p>
      <form action="" className="mt-4 *:mt-3">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="name" className="text-slate-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border w-full outline-none p-1 border-gray-200 mt-2"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-slate-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="border w-full outline-none p-1 border-gray-200 mt-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="city" className="text-slate-600">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            className="border w-full outline-none p-1 border-gray-200 mt-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="postcode" className="text-slate-600">
              Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="postcode"
              placeholder="Enter your postcode"
              className="border w-full outline-none p-1 border-gray-200 mt-2"
            />
          </div>
          <div>
            <label htmlFor="country" className="text-slate-600">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              className="border w-full outline-none p-1 border-gray-200 mt-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="Phone" className="text-slate-600">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="Phone"
            placeholder="Enter your Phone"
            className="border w-full outline-none p-1 border-gray-200 mt-2"
          />
        </div>
        {/* radio */}
        <div className="md:grid grid-cols-2 ">
          <div>
            <h3>Default shipping address</h3>
            <div className="flex gap-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="yesDefault"
                  className="mr-2"
                  name="defaultShipping"
                />
                <label className="text-slate-600" htmlFor="yesDefault">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noDefault"
                  className="mr-2"
                  name="defaultShipping"
                />
                <label className="text-slate-600" htmlFor="noDefault">
                  No
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3>Default billing address</h3>
            <div className="flex gap-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="yesDefaultBilling"
                  className="mr-2"
                  name="defaultBilling"
                />
                <label className="text-slate-600" htmlFor="yesDefaultBilling">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noDefaultBilling"
                  className="mr-2"
                  name="defaultBilling"
                />
                <label className="text-slate-600" htmlFor="noDefaultBilling">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAddress;
