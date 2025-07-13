import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
  const fetchData = async () => {
    const productResponse = await fetch('https://fakestoreapi.com/products')

      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
      }
  }
  fetchData();
    }, []);

    const handleAddProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });

    if (res.ok) {
      alert("successfully added new product");
    }
  };

console.log("data...",data);


  return (
    <>
    <h1>Data Fetching</h1>
    <button onClick={handleAddProduct} className='bg-amber-300 text-white p-2 m-4 rounded-2xl'>Add new item</button>

    <div>
        {data.map((item) => (
            <div key = {item.id}>
                <h1>{item.title}</h1>
                <div>{item.description} </div>
                <div>{item.rating.rate}</div>
                 </div>
        ))}
    </div>
    </>
  )
}

export default Home