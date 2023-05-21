import React, { useEffect, useState } from 'react';
import ToyCard from '../AllToy/ToyCard';

const CategoriesTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("racing");

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-iqbalzaber-kmej2i4sm.vercel.app/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);
//   const result =  toys.filter(job=> job.sub_category == activeTab);
//  setToys(result);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); }


  
  return (
    <div>
    <h1 className="text-3xl font-extrabold text-center mb-5">CHOSE YOUR<span className=' text-red-300'> CETEGORY</span></h1>
    <div className=" text-center flex align-middle justify-center">
      <div className="text-center w-100 mx-auto">
        <div className="tabs ">
          <div
            onClick={() => handleTabClick("TRACTOR")}
            className={`tab  tab2 remote ${
              activeTab == "TRACTOR" ? "btn btn-ghost" : "btn btn-outline btn-success"
            }`}
          >
          <button className=''>Tractor</button>
          </div>
          <div
            onClick={() => handleTabClick("racing")}
            className={`tab  tab2 Offline ${
              activeTab == "racing" ? "btn btn-ghost" : "btn btn-outline btn-success"
            }`}
          >
          Racing Car
          </div>
          <div
            onClick={() => handleTabClick("dancing")}
            className={`tab  tab2 Offline ${
              activeTab == "dancing" ? "btn btn-ghost" : "btn btn-outline btn-success"
            }`}
          >
          Toy Car
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-3 my-container ">
      {toys?.map((toy) => (
        <ToyCard
        key={toy._id}
        toy={toy}></ToyCard>
      ))}
    </div>
  </div>
  );
};

export default CategoriesTab;