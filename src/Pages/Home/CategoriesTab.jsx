import  { useEffect, useState } from 'react';
import ToyCard from '../AllToy/ToyCard';

const CategoriesTab = () => {
  const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState(" ");

  useEffect(() => {
    fetch(`http://localhost:5000/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      });
  }, [activeTab]);
//   const result =  jobs.filter(job=> job.sub_category == activeTab);
//  setJob(result);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); }


  
  return (
    <div>
    <h1 className="text-3xl font-extrabold text-center mb-5 ">CHOSE YOUR <span className=' text-red-300'>CETEGORY</span></h1>
    <div className=" text-center flex align-middle justify-center">
      <div className="text-center w-100 mx-auto">
        <div className="tabs gap-1 ">
          <div
            onClick={() => handleTabClick("TRACTOR")}
            className={`tab  tab2 remote ${
              activeTab == "TRACTOR" ? "btn btn-outline btn-info" : "btn btn-active btn-ghost"
            }`}
          >
          <button className=''>Racing Car</button>
          </div>
          <div
            onClick={() => handleTabClick("racing")}
            className={`tab  tab2 Offline ${
              activeTab == "racing" ? " btn btn-outline btn-error" : "btn btn-active btn-ghost"
            }`}
          >
            Tractor
          </div>
          <div
            onClick={() => handleTabClick("Dancing")}
            className={`tab  tab2 Offline ${
              activeTab == "Dancing" ? " btn btn-outline btn-success" : "btn btn-active btn-ghost"
            }`}
          >
           Babe Toys
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-10 my-container">
      {jobs?.map((toy) => (
        <ToyCard
        key={toy._id}
        toy={toy}></ToyCard>
      ))}
    </div>
  </div>
  );
};

export default CategoriesTab;