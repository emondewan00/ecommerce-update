"use server";

import connectMongo from "./connectDb";
import ProductModel from "@/models/ProductModel";

export const getProductsBySearchParams = async (searchParams) => {
  try {
    await connectMongo();
    let data = [];
    let query = {};
    let sortObject = {};
    let filterData = {};

    // create a query object start
    if (searchParams?.q) {
      query["$or"] = [
        { name: { $regex: searchParams.q, $options: "i" } },
        { category: { $regex: searchParams.q, $options: "i" } },
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
      query.colors = { $in: searchParams.colors.split(",") };
    }

    if (searchParams?.brand) {
      query.brand = searchParams.brand;
    }

    if (searchParams?.rating) {
      query.rating = { $gte: parseInt(searchParams.rating) };
    }
    if (searchParams?.sort) {
      const sortOrder = searchParams?.order === "desc" ? -1 : 1;
      sortObject[searchParams.sort] = sortOrder;
    }
    // create a query object end

    // calculate for pagination start
    const limit = parseInt(searchParams.limit) || 10;
    const page = parseInt(searchParams.page) || 1;
    const skip = (page - 1) * limit;

    const documentCount = await ProductModel.find(query).lean().lean();
    const totalPages = Math.ceil(documentCount.length / limit);
    const hasMore = totalPages > page;
    // calculate for pagination end

    //find data form database start
    data = await ProductModel.find(query)
      .sort(sortObject)
      .limit(limit)
      .skip(skip);
    //find data form database end

    // creating filter data object start
    if (searchParams?.filterData) {
      filterData = data.reduce(
        (acc, item) => {
          if (!acc.brands.includes(item.brand)) {
            acc.brands.push(item.brand);
            acc.brands.sort();
          }
          if (!acc.categories.includes(item.category)) {
            acc.categories.push(item.category);
            acc.categories.sort();
          }
          // if (!acc.ratings.includes(item.rating)) {
          //   acc.ratings.push(item.rating);
          //   acc.ratings.sort((a, b) => b - a);
          // }
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
          colors: [],
          sizes: [],
        }
      );
    }
    // creating filter data object end
    console.log(query);
    return {
      products: data,
      filters: filterData,
      success: true,
      hasMore,
      totalPages,
    };
  } catch (error) {
    return { error: error.message, success: false };
  }
};
