import { useState, useEffect } from "react";

const Cancel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      ) : (
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-red-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Failed!</h1>
          <p className="text-gray-600">
            Your operation could not be completed.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cancel;
