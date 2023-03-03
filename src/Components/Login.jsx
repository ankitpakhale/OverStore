import React from "react";
const Login = () => {
  return (
    <>
      <header className="header header-mini">
        <div className="header-title">Login</div>
      </header>
      <div className="mr-auto ml-auto mt-5 mb-5 col-4">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
