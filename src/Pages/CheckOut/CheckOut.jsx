import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(authContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service_id: _id,
      service: title,
      price: price,
    };
    //for send info of orders to database
    console.log(booking);

    //for send data
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };

  return (
    <div>
      <h3>Book Service: {title}</h3>

      <div className=" min-h-screen bg-base-200">
        <div className="max-w-5xl mx-auto flex-col lg:flex-row">
          <div className=" card flex-shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleBookService} className="card-body">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control ">
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="date"
                      name="date"
                      placeholder="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="form-control ">
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    className="input input-bordered h-32"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="submit"
                  className="p-3 rounded-md bg-[#FF3811] text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
