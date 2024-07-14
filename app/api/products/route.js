import connectMongo from "@/utils/connectDb";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";
export async function GET(req) {
  await connectMongo();
  let data = [];
  let query = {};
  let sortObject = {};
  let limit = null;
  const searchParams = Object.fromEntries(req?.nextUrl?.searchParams);

  if (searchParams?.q) {
    query.name = { $regex: searchParams.q, $options: "i" };
  }
  if (searchParams?.category) {
    query.category = { $in: searchParams.category.split(",") };
  }
  if (searchParams?.minPrice || searchParams?.maxPrice) {
    query.price = {};
    if (searchParams?.minPrice) {
      query.price.$gte = searchParams.minPrice;
    }
    if (searchParams?.maxPrice) {
      query.price.$lte = searchParams.maxPrice;
    }
  }
  if (searchParams?.sizes) {
    query.size = { $in: searchParams.sizes.split(",") };
  }
  if (searchParams?.colors) {
    query.color = { $in: searchParams.colors.split(",") };
  }

  if (searchParams?.sort) {
    const sortOrder = searchParams?.order === "desc" ? -1 : 1;
    sortObject[searchParams.sort] = sortOrder;
  }

  if (searchParams?.limit) {
    limit = parseInt(searchParams.limit);
  }

  data = await ProductModel.find(query).sort(sortObject).limit(limit);

  return NextResponse.json(data);
}
