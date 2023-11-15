import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.179121816241!2d3.376125973992623!3d6.498994023449716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59087c40e33%3A0x214df15a9bd4ccf4!2sGOMYCODE%20Yaba!5e0!3m2!1sen!2sng!4v1700089201668!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
              </div>
              <div>
                <h3 className="contact-title">Get in touch with us</h3>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
