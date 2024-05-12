export default async function getGroupProducts({ url1, url2 }) {
    const response = await fetch(
      `https://dummyjson.com/products/category/${url1}`
    );
    const response2 = await fetch(
      `https://dummyjson.com/products/category/${url2}`
    );
    const data2 = await response2.json();
    const data = await response.json();
    const products = [...data?.products, ...data2?.products]?.slice(0,8);
    return products;
  }
  