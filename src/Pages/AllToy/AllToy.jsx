import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Test from "../AllToy/Test";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-iqbalzaber-kmej2i4sm.vercel.app/toys")
  .then((response) => response.json())
  .then((data) => {
    setAllToys(data);
  });
}, []);

const handleSearch = () => {
    fetch(`https://b7a11-toy-marketplace-server-side-iqbalzaber-kmej2i4sm.vercel.app/getToyByText${searchText}`)
    .then((response) => response.json())
    .then((data) => {
      setAllToys(data);

      console.log(data);
    });
};

  return (
    <div className="mt-5">
    <div className="flex justify-center  mb-0">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="input input-bordered"
      />

      <button
        className="btn btn-outline btn-info"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>

    <div className="overflow-x-auto w-full my-container">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th>Picture & Toy Name</th>
          <th> Seller Name </th>
          {/* <th> Toy Name</th> */}
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
          {/* <th><button className="btn btn-outline btn-sm btn-success">Success</button></th> */}
        </tr>
      </thead>
      <tbody>
      {allToys.map((toy) => (
        <Test key={toy._id} toy={toy} />
      ))}
      </tbody>
    </table>
  </div>
  </div>
);
};
export default AllToy;
