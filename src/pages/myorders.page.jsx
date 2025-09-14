import { useGetUserOrdersQuery } from "@/lib/api"; // you'll define a new RTK query
import { useEffect } from "react";

function MyOrdersPage() {
  const { data: orders, isLoading, isError } = useGetUserOrdersQuery();

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Failed to load orders.</p>;
  if (!orders?.length) return <p>No orders found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <ul className="space-y-4">
        {orders.map(order => (
          <li key={order._id} className="bg-sky-50 border rounded-lg p-4">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Total:</strong> ${order.totalPrice}</p>
           <ul className="mt-2 list-disc list-inside">
              {order.items && order.items.length > 0 ? (
                order.items.map((item, index) => (
                  <li key={item.productId?._id || index}>
                    {item.productId?.name || "Unknown"} x {item.quantity} - $
                    {item.productId?.price ? item.productId.price * item.quantity : 0}
                  </li>
                ))
              ) : (
                <li>No products</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyOrdersPage;
