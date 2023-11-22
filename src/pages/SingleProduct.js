import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component"; 
import { useState } from "react";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique reprehenderit cumque dolorem neque explicabo sed at
                  exercitationem velit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dignissimos maxime aut odit? Vel suscipit
                  eveniet labore mollitia quaerat, unde sed! minima reiciendis.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
          <div className="review-head d-flex justify-content-between align-items-end">
            <div>
              <h4 className="mb-2">Customer Reviews</h4>
             <div className="d-flex align-items-center gap-10">
             <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false} 
              activeColor="#ffd700"
            />
            <p className="mb-0">Based on 2 Reviews</p>
             </div>
            </div>   
            {orderedProduct && (
               <div>
               <a  className="text-dark text-decoration-underline" href="">Write a Review</a>
             </div>
            )}
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
