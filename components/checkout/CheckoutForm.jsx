"use client";
import { createOrder } from "@/queries/order";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CheckoutForm = ({ initialAddress, products }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...initialAddress,
    },
  });

  const onSubmit = async (data) => {
    const totalPrice = products?.reduce(
      (sum, item) => item?.product_id?.price * item?.quantity + sum,
      0
    );
    const productsFormate = products.reduce((pds, product) => {
      return [
        {
          productId: product.product_id?._id,
          price: product.product_id?.price,
          discount_price: product.product_id?.discount_price,
          quantity: product.quantity,
        },
        ...pds,
      ];
    }, []);
    const result = await createOrder({
      products: productsFormate,
      totalPrice,
      paymentMethod: "cash_on_delivery",
      shippingAddress: data,
      userId: data?.userId,
    });
    console.log(result, "created order");
  };
  // console.log(products);
  return (
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
      <input type="submit" hidden id="submitBtn" />
    </form>
  );
};

export default CheckoutForm;
