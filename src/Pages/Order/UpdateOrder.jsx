import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateOrder = () => {
  const update = useLoaderData();
  console.log(update);

  const handleByCustomer = (event) => {
    event.preventDefault();

    const form = event.target;

    const toyName = form.toy.value;

    const price = form.price.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const newOrder = {
      price,
      toyName,
      quantity,
      details,
    };
    console.log(newOrder);


// send data to mongoDb
fetch(`https://b7a11-toy-marketplace-server-side-iqbalzaber-git-main-youaredog.vercel.app/order/${_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newOrder),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount > 0 ) {
        Swal.fire({
          title: "Success!",
          text: "Toy added Successfully ",
          icon: "success",
          confirmButtonText: "okay",
        });
      }
    });




  };

  const {
    available_quantity,
    price,
    details,
    quantity,
    _id,

    toyName,
  } = update;

  return (
    <div className="my-container">
      <form onSubmit={handleByCustomer}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name: </span>
            </label>
            <input
              type="text"
              name="toy"
              defaultValue={toyName}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price: </span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity: </span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description: </span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input input-bordered"
            />
          </div>
        </div>
        <button className="btn mt-8  w-full"> Order Now </button>
      </form>
    </div>
  );
};

export default UpdateOrder;
