import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />Go back to Blogs
                  </Link>
                <h3 className="title">
                  A beautiful sunday morning renaissance
                </h3>
                <img src="/images/blog-3.webp  " 
                className="img-fluid w-100 my-4" 
                alt="blog" 
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, ad. Dignissimos accusamus vel dolorem placeat,
                  consectetur dolores velit eius nihil, laudantium culpa, odio
                  minus iure Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem eos possimus expedita doloribus, quia non
                  velit et repudiandae eligendi nam neque hic illum perspiciatis
                  magni beatae modi saepe fugit excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
