import { auth } from "@/auth";
import EditAddress from "@/components/address/EditAddress";
import { findAddressById } from "@/queries/address";

const AddressEdit = async ({ params: { id } }) => {
  const session = await auth();
  const address = await findAddressById(session?.user?.id, id);
  return (
    <div className="px-8">
      <p className="font-bold">Edit address</p>
      <EditAddress address={address} />
    </div>
  );
};

export default AddressEdit;
