import { FaBoxOpen } from "react-icons/fa";

const UserPage = async () => {
  return (
    <div>
      <p className="text-[16px] text-slate-800">Hello Emon</p>
      <p className="text-[16px] text-slate-800">
        From your account you can view your recent orders,manage your shipping
        and bling address,and edit your password and account details
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
        <div className="border group h-40 flex flex-col justify-center items-center">
          <FaBoxOpen className="text-4xl group-hover:scale-125 transition-all duration-300 delay-75" />
          <h3 className="uppercase">orders</h3>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
