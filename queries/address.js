import connectMongo from "@/utils/connectDb";
import UserModel from "@/models/UserModel";

export async function findAddressById(userId, addressId) {
  try {
    await connectMongo();
    const user = await UserModel.findById(userId);
    if (user) {
      const address = user.addresses.id(addressId); // Find the address by ID
      if (address) {
        console.log("Address found:", address);
      } else {
        console.log("No address found with this ID.");
      }
    } else {
      console.log("No user found with this ID.");
    }
  } catch (err) {
    console.error("Error finding address:", err);
  }
}
