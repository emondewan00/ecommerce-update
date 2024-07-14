import Breadcrumb from "@/components/shared/Breadcrumb";
import WishlistCard from "@/components/wishlist/WishlistCard";

const Wishlist = () => {
  return (
    <div>
      <Breadcrumb page={"Wishlist"} location={"/wishlist"} />
      <div className="container gap-6 pt-4 pb-16">
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
