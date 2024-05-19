import ButtonOutline from "@/components/shared/ButtonOutline";


const AccountDetails = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Account Details</h2>
      <form action="">
        <div className="grid md:grid-cols-2 md:gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[16px] font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[16px] font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-[16px] font-bold mb-2"
            htmlFor="displayName"
          >
            Display Name
          </label>
          <input
            className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="displayName"
            type="text"
            placeholder="Display Name"
          />
          <p className="text-[12px] text-slate-500 mt-1">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-[16px] font-bold mb-2"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailAddress"
            type="email"
            placeholder="Email"
          />
          <p className="text-[12px] text-slate-500 mt-1">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        <div className="">
          <h2 className="text-xl font-bold my-4">Password Change</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[16px] font-bold mb-2"
              htmlFor="currentPassword"
            >
              Current Password leave blank to leave unchanged
            </label>
            <input
              className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentPassword"
              type="password"
              placeholder="Current Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[16px] font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password leave blank to leave unchanged
            </label>
            <input
              className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[16px] font-bold mb-2"
              htmlFor="confPassword"
            >
              Confirm Password
            </label>
            <input
              className="border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <ButtonOutline text={"SAVE CHANGES"} style="text-white bg-slate-700" />
      </form>
    </div>
  );
};

export default AccountDetails;
