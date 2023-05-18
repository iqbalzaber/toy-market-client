import { useEffect, useState } from 'react';
import ToyCard from '../AllToy/ToyCard';

const CategoriesTab = () => {
  const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("remote");

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); }


  
  return (
    <div>
    <h1 className="title text-center mt-5 p-5">Available Job's</h1>
    <div className="tab-container text-center">
      <div className="text-center w-100 m-auto">
        <div className="tabs d-flex justify-content-center align-items-center">
          <div
            onClick={() => handleTabClick("remote")}
            className={`tab  tab2 remote ${
              activeTab == "remote" ? " bg-danger text-white" : ""
            }`}
          >
            Remote
          </div>
          <div
            onClick={() => handleTabClick("offline")}
            className={`tab  tab2 Offline ${
              activeTab == "offline" ? " bg-danger text-white" : ""
            }`}
          >
            Offline
          </div>
        </div>
      </div>
    </div>
    <div className="jobs-container mt-5 row">
      {/* {jobs?.map((toy) => (
        <ToyCard toy={toy}
        ></ToyCard>
      ))} */}
    </div>
  </div>
  );
};

export default CategoriesTab;