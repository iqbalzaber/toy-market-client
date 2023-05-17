import Banner from "../../Banner/Banner";
import TakeOrder from "../../TakeOrder/TakeOrder";
import Inpage from "../../information/Inpage";


const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
           </div>
           <div>
            <Inpage></Inpage>
           </div>

           <div>
            <TakeOrder></TakeOrder>
           </div>
        </div>
    );
};

export default Home;