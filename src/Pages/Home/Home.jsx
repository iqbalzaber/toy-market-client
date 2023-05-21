
import Banner from './Banner';
import Service from './Service';
import Customer from './Customer';
import CategoriesTab from './CategoriesTab';
import Gallery from './Gallery/Gallery';
import Inpage from './information/Inpage';
import DiscountPage from '../DIscoountPage/DiscountPage';
// import AnotherBennnr from './Gallery/AnotherBenner';



const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mt-5'>
            <Service />
            </div>
            <div className='mt-5 container'>
                <Gallery></Gallery>
            </div>
            <Customer />
           <div className='my-10'>
           <CategoriesTab />
           </div>
            <div>
                <Inpage></Inpage>
            </div>
           {/* <AnotherBenner/> */}
           <DiscountPage/>
        </div>
    );
};

export default Home;