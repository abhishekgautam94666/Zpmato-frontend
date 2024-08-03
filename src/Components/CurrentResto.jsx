import toast from "react-hot-toast";

const CurrentResto = ({ currORd }) => {
  async function cancelOrder(id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/order/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const res = await response.json();
      if (res.success == false) {
        toast.error("Failed to cancel order");
      }
      toast.success("Order Cancelled");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      {currORd.map((item) => (
        <div key={item.items._id}>
          <div className="flex items-center p-4 border-b border-gray-300">
            <img
              src={item.items.url}
              alt={item.items.name}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.items.name}</h2>
              <p className="text-gray-600">Price: ₹{item.items.price}</p>
              <p className="text-gray-600">Quantity: {item.items.quantity}</p>

              <p className="text-sm font-medium mt-2 text-gray-700">
                Delivery Address: {item.userAddress}
              </p>
              <p
                className={`text-sm font-medium mt-2 ${
                  item.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Status: {item.status}
              </p>
              <button
                onClick={() => cancelOrder(item._id)}
                className="text-sm font-medium mt-2 cursor-pointer bg-yellow-500 p-1 rounded-md"
              >
                Cacel order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentResto;
