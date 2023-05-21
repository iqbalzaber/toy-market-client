import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.details.value;
    const picture_url = form.photo.value;
    const rating = form.rating.value;
    const available_quantity = form.quantity.value;
    const seller_email = form.seller_email.value;
    const seller_name = form.seller_name.value;
    const sub_category = form.sub_category.value;
    const addNew = {
      name,
      price,
      description,
      picture_url,
      rating,
      available_quantity,
      seller_email,
      seller_name,
      sub_category,
    };
    console.log(addNew);

    fetch("https://b7a11-toy-marketplace-server-side-iqbalzaber-git-main-youaredog.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNew),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toys has been added successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/toys");
        }
      });

    // _id,description,picture_url,available_quantity,rating,price,seller_name,name,seller_email
  };
  return (
    <div className="bg-pink-50 p-24">
      <h2 className="text-3xl text-center font-bold  "> ADD YOUR TOY </h2>
      <form onSubmit={handleAddToy}>
        {/* row  coffee name */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* row  coffee qunatity */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row  coffee supplier */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                className="input input-bordered h-20 w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block mt-5">add new </button>
      </form>
    </div>
  );
};

export default AddToy;
