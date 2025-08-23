import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice"; 
import { useGetAllProductsQuery } from "@/lib/api";


function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Fetch all products (or you could create a dedicated getProductById endpoint later)
  const { data: products, isLoading, isError } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  const product = products?.find((p) => p._id === productId);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">{product.name}</h1>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-40 h-70 object-cover rounded-2xl"
    />
      <p>{product.description}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-black text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
