import informationpic from '../../assets/integrations (1).png'

const Inpage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img  src={informationpic} className="max-w-sm rounded-lg shadow-4xl " />
          <div className='w-1/2 ms-10'>
            <h1 className="text-5xl font-bold">FOR MORE INFORMARION!</h1>
            <p className="py-6 ">Skip the printed pick list and use your smartphone to fulfill orders and update inventory levels on the spot. Or upgrade to the inFlow Smart Scanner—a full laser scanner built right into a drop-proof Android device..
<br />



<br />
It sucks to miss a sale because you’ve run out of stock. inFlow’s reorder points help you define your minimums and reorder notifications give you the breathing room to order more. Balancing supply and demand has never been easier.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Inpage;