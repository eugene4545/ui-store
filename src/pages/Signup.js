import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";


const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div>  

                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button className="button border-0">Sign Up</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Signup 