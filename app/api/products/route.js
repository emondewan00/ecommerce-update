import connectMongo from "@/utils/connectDb";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";
export async function GET(req) {
  await connectMongo();
  let data = [];
  let query = {};
  let sortObject = {};
  let filterData = {};
  const searchParams = Object.fromEntries(req?.nextUrl?.searchParams);

  if (searchParams?.q) {
    query["$or"] = [
      { name: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
    ];
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

  // calculate for pagination
  const limit = parseInt(searchParams.limit) || 10;
  const page = parseInt(searchParams.page) || 1;
  const skip = (page - 1) * limit;

  data = await ProductModel.find(query)
    .sort(sortObject)
    .limit(limit)
    .skip(skip);

  if (searchParams?.filterData) {
    filterData = data.reduce(
      (acc, item) => {
        if (!acc.brands.includes(item.brand)) {
          acc.brands.push(item.brand);
        }
        if (!acc.categories.includes(item.category)) {
          acc.categories.push(item.category);
        }
        if (!acc.ratings.includes(item.rating)) {
          acc.ratings.push(item.rating);
        }
        item.size.forEach((item) => {
          if (!acc.sizes.includes(item)) {
            acc.sizes.push(item);
          }
        });

        item.colors.forEach((item) => {
          if (!acc.colors.includes(item)) {
            acc.colors.push(item);
          }
        });
        return acc;
      },
      {
        brands: [],
        categories: [],
        ratings: [],
        colors: [],
        sizes: [],
      }
    );
  }

  return NextResponse.json({ products: data, filters: filterData, });
}
