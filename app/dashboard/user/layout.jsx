// import
import { auth } from "@/auth";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { redirect } from "next/navigation";
const UserLayout = async ({ children }) => {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div>
      <Breadcrumb location={"/dashboard/user"} page={"My Account"} />
      <div className="max-w-5xl mx-auto md:flex my-10 px-4 md:px-0 gap-4">
        <div className="basis-64 ">
          <h3 className="text-lg font-semibold uppercase my-2">My Account</h3>
          <ul className="dashboard-menu text-slate-700 nav-link ">
            <li>
              <Link href={"/"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/user/orders"}>Orders</Link>
            </li>
            <li>
              <Link href={"/"}>Downloads</Link>
            </li>
            <li>
              <Link href={"/"}>Addresses</Link>
            </li>
            <li>
              <Link href={"/dashboard/user/details"}>Account Details</Link>
            </li>
            <li>
              <Link href={"/"}>Cart</Link>
            </li>
            <li>
              <Link href={"/"}>Wish List</Link>
            </li>
            <li>
              <Link href={"/"}>Log Out</Link>
            </li>
          </ul>
        </div>
        <div className="w-full mt-4 md:mt-0"> {children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
