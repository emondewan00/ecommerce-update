import { auth } from "@/auth";
import Breadcrumb from "@/components/shared/Breadcrumb";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { redirect } from "next/navigation";

const Wishlist = async () => {
  const session = await auth();
  if (!session) return redirect("/");

  const wishlistItemsRes = await fetch(
    `https://porto-ecommerce-three.vercel.app/wishlist/${session?.user?.id}`
  );
  const data = await wishlistItemsRes.json();
  return (
    <div>
      <Breadcrumb page={"Wishlist"} location={"/wishlist"} />
      <div className="max-w-5xl mx-auto pt-8 pb-16">
        <div className="mx-auto space-y-4 max-w-6xl">
          {data?.length ? (
            data?.map((item) => <WishlistCard key={item._id} data={item} />)
          ) : (
            <p className="text-gray-600 text-center">
              Your wishlist is empty. Add some items to start exploring our
              products!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
