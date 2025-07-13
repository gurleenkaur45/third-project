import { useQuery } from "@tanstack/react-query";
import React from "react";

const NewCard = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  if (isError) {
    console.log("Error while fetching data");
    return <div>Error fetching data</div>;
  }

  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data</div>;
  }

  // console.log("data...", data, isLoading, isError);

  return (
    <div className="container grid grid-cols-3 p-3 gap-6 m-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-slate-300 rounded-xl cursor-pointer p-4 shadow-md hover:bg-slate-100 transition duration-300 bg-white"
        >
          <img
            src={item.image}
            alt="product"
            className="w-32 h-48 object-contain mx-auto mb-3 transition-transform duration-300 hover:scale-105"
          />

          <h1 className="text-xl font-semibold mt-2 text-green-500 text-center">
            {item.title}
          </h1>
          <div className="p-3 m-2 text-base font-normal text-black text-justify">
            {item.description}
          </div>
          <div className="text-xl font-bold mt-3">${item.price}</div>
          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewCard;
