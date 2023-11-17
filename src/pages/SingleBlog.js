import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from '../components/BlogCard';
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
                    <h3 className="title">A beautiful sunday morning renaissance</h3>
                </div>
            </div>
</div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog