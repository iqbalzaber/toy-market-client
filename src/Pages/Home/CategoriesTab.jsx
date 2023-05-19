import  { useEffect, useState } from 'react';
import ToyCard from '../AllToy/ToyCard';

const CategoriesTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("racing");

  useEffect(() => {
    fetch(`http://localhost:5000/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName); }


  
  return (
    <div>
    <h1 className="text-3xl font-extrabold text-center mb-5">CHOSE YOUR <span className=' text-red-300'>CETEGORY</span></h1>
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
              activeTab == "racing" ? " btn btn-ghost" : "btn btn-outline btn-info"
            }`}
          >
          Racing Car
          </div>
          <div
            onClick={() => handleTabClick("Dancing")}
            className={`tab  tab2 Offline ${
              activeTab == "Dancing" ? " btn btn-ghost" : "btn btn-outline btn-error"
            }`}
          >
          Music Car
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