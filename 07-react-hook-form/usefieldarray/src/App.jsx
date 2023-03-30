import React from "react";
import { useForm } from "react-hook-form";

const UserInformation = ({register}) => {
  return (
    <div className="card">
      <div className="card-header">User Information</div>
      <div className="card-body">
        <div className="form-row form-group d-flex flex-row gap-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First name"
              {...register("firstname")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last name"
              {...register("lastname")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              {...register("email")}
            />
          </div>
          <div className="col">
            <select className="form-control" id="state" {...register("state")} >
              <option value="">Select Your State</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
              <option value="Assam">Assam</option>
              <option value="Goa">Goa</option>
              <option value="Manipur">Manipur</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-2" >Add user</button>
      </div>
    </div>
  );
};

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const basicForm = (
    <div className="card">
      <div className="card-header">Basic form</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            {...register("fullname")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            {...register("phone")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password")}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="container py-5">
        <div className="card border-0 shadow w-75 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {basicForm}
            <div className="mt-5">
              <UserInformation register={register} />
            </div>
            <button type="submit" className="mt-5 btn btn-primary">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
