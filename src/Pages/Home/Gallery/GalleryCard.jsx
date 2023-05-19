import babe from '../../../assets/babe1.jpg'
import babe2 from '../../../assets/babe2.jpg'
import babe3 from '../../../assets/babe3.jpg'
import babe7 from '../../../assets/babe1.jpg'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { rating } from '@material-tailwind/react';



const GalleryCard = () => {
    return (
      <>
        <div className="card w-96 bg-base-100  rounded-3xl">
        <figure className="px-10 pt-10">
            <img src={babe} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
        <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
                <div className='text-center'>
                   <p>price: sujfhgu</p>
                    <p>review: ufhgdasiufduasfhdiuaspspspspspspspspspspspspspspspspspspspspspspspspspspspspspsppcxhjshiuhdf7uhasuifhd7uery</p>
                   </div>
           </div>
           
    </div>
    <div className="card w-96 bg-base-100 ">
        <figure className="px-10 pt-10">
            <img src={babe2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
        <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
                <div className='text-center'>
                   <p>price</p>
                    <p>review</p>
                   </div>
           </div>
           
    </div>
    <div className="card w-96 bg-base-100 ">
        <figure className="px-10 pt-10">
            <img src={babe3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
        <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
                <div className='text-center'>
                   <p>price</p>
                    <p>review</p>
                   </div>
           </div>
           
    </div>
    <div className="card w-96 bg-base-100 ">
        <figure className="px-10 pt-10">
            <img src={babe7} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
        <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
                   <div className='text-center'>
                   <p>price</p>
                    <p>review</p>
                   </div>
           </div>
           
    </div>
    </>
    );
};

export default GalleryCard;