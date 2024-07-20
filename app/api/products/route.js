import { NextResponse } from "next/server";
import { getProductsBySearchParams } from "@/utils/getProductsBySearchParams";
export async function GET(req) {
  const searchParams = Object.fromEntries(req?.nextUrl?.searchParams);
  try {
    const products = await getProductsBySearchParams(searchParams);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({
      error: error.message || "server side error",
      success: false,
    });
  }
}
