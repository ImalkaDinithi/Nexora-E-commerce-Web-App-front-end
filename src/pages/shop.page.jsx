import { useGetAllProductsQuery } from "@/lib/api";
import { useParams } from "react-router";
import ProductSearchForm from "@/components/ProductSearchForm";

function ShopPage() {
   const { category } = useParams(); // shoes, tshirts,
  const { 
    data: products,
    isLoading, 
    isError 
  } = useGetAllProductsQuery({ category });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6 w-full max-w-7xl mx-auto">
      {products?.length ? (
        products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg">
            <img
              src={product.image} 
              alt={product.name}
              className="w-full h-90 object-cover"
            />
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
