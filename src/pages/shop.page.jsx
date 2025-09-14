import { useGetAllProductsQuery, useGetAllCategoriesQuery } from "@/lib/api";
import { useParams } from "react-router";

function ShopPage() {
  const { category: categorySlug } = useParams(); // "shoes" or undefined
  const { data: categories, isLoading: catLoading } = useGetAllCategoriesQuery();

  // Wait for categories to load
const categoryId = categories?.find(c => c.slug === categorySlug)?._id;

const { data: products, isLoading, isError } = useGetAllProductsQuery(
  categorySlug ? { category: categoryId } : {}
);


  if (catLoading || isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6 w-full max-w-7xl mx-auto">
      {products?.length ? (
        products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-90 object-cover" />
            <h2 className="font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ShopPage;
