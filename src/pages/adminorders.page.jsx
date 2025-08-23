import { useGetAllOrdersQuery } from "@/lib/api";

function AdminOrdersPage() {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Failed to load orders.</p>;
  if (!orders?.length) return <p>No orders found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Orders (Admin)</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Products</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="px-4 py-2">{order._id}</td>
                <td className="px-4 py-2">{order.userId?.email || order.userId}</td>
                <td className="px-4 py-2">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : "N/A"}
                </td>
                <td className="px-4 py-2">${order.total ?? 0}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside space-y-1">
                    {order.products?.length ? (
                      order.products.map((item, index) => (
                        <li key={item.productId?._id || index}>
                          {item.productId?.name || "Unknown"} x {item.quantity} - $
                          {item.productId?.price ? item.productId.price * item.quantity : 0}
                        </li>
                      ))
                    ) : (
                      <li>No products</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrdersPage;
