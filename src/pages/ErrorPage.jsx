import React from "react";

const ErrorPage = () => {
  const handlerReload = () => {
    window.location.reload();
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 193px)" }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        onClick={handlerReload}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorPage;
