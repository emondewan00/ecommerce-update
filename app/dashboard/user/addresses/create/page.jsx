"use client";

import addAddress from "@/actions/addAddress";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SubmitForm = () => {
  return (
    <div className="flex justify-end mt-4">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

const CreateAddress = () => {
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  const onSubmit = async (data) => {
    const userId = session?.data?.user?.id;
    data.defaultShipping = data.defaultShipping === "true";
    data.defaultBilling = data.defaultBilling === "true";

    const result = await addAddress({ ...data, userId });
    if (result.success) {
      router.push("/dashboard/user/addresses");
      toast.success("Address added successfully!");
    } else {
      toast.error("Failed to add address.");
    }
  };

  return (
    <div className="px-8">
      <p className="font-bold">Add address</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 *:mt-2">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="name" className="text-slate-600">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`border w-full outline-none p-1 mt-2 ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="address" className="text-slate-600">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className={`border w-full outline-none p-1 mt-2 ${
                errors.address ? "border-red-500" : "border-gray-200"
              }`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
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
            className={`border w-full outline-none p-1 mt-2 ${
              errors.city ? "border-red-500" : "border-gray-200"
            }`}
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
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
              className={`border w-full outline-none p-1 mt-2 ${
                errors.postcode ? "border-red-500" : "border-gray-200"
              }`}
              {...register("postcode", {
                required: "Postcode is required",
                pattern: {
                  value: /^[0-9]{4,6}$/,
                  message: "Invalid postcode",
                },
              })}
            />
            {errors.postcode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.postcode.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="country" className="text-slate-600">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              className={`border w-full outline-none p-1 mt-2 ${
                errors.country ? "border-red-500" : "border-gray-200"
              }`}
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-slate-600">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className={`border w-full outline-none p-1 mt-2 ${
              errors.phone ? "border-red-500" : "border-gray-200"
            }`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        {/* Radio for Default Shipping Address */}
        <div className="md:grid grid-cols-2">
          <div>
            <h3>Default shipping address</h3>
            <div className="flex gap-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="yesDefault"
                  value="true"
                  {...register("defaultShipping", { required: true })}
                />
                <label className="text-slate-600" htmlFor="yesDefault">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noDefault"
                  value="false"
                  {...register("defaultShipping", { required: true })}
                />
                <label className="text-slate-600" htmlFor="noDefault">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Radio for Default Billing Address */}
          <div>
            <h3>Default billing address</h3>
            <div className="flex gap-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="yesDefaultBilling"
                  value="true"
                  {...register("defaultBilling", { required: true })}
                />
                <label className="text-slate-600" htmlFor="yesDefaultBilling">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noDefaultBilling"
                  value="false"
                  {...register("defaultBilling", { required: true })}
                />
                <label className="text-slate-600" htmlFor="noDefaultBilling">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <SubmitForm />
      </form>
    </div>
  );
};

export default CreateAddress;
