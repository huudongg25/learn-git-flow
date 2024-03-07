import { Flex, Rate } from "antd";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import './detail.css'
const Detail = (): JSX.Element => {
  return (
    <section className="detail">
      {/* {isLoading && <Loading />} */}
      <h1>Detail</h1>
      <figure>
        <div className="detailImg">
          <img src='' alt="" />
        </div>
        <figcaption>
          <div className="detailTitle">
            <h2>Fuck Dan</h2>
            <span>999999999</span>
          </div>
          {/* <span className="detailImgRate">
            {rateStar} <FaStar className="iconDetail" />
          </span> */}
          <ul>
            <li>
              <p>*Description:</p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              molestiae commodi aspernatur quas officiis sequi incidunt,
              inventore quibusdam beatae asperiores explicabo vero voluptatibus
              rerum laudantium ex sapiente saepe nulla? Nemo.
            </li>
            <li>
              <p>*Ingredients:</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              voluptatum sapiente suscipit similique, veniam voluptates at alias
              magni asperiores unde totam ratione, sunt quisquam autem nesciunt
              cupiditate eaque tempora optio.
            </li>
            <li>
              <p>*Allergens:</p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
          </ul>
        </figcaption>
      </figure>
      <div className="detailActions">
        <div className="detailActionReview">
          {/* <Flex gap="middle">
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : null}
          </Flex> */}
          <div className="detailActionWrites">
            <textarea placeholder="Enter your Review" id="" />
            <div className="detailActionWrite">
              <span>0/255 Chars</span>
              <button>Review</button>
            </div>
          </div>
        </div>
        <div className="detailActionAdd">
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="getVoucherDetail">
        <h2>Get 15 point for first order from Huong Bakery</h2>
        <div className="getVoucherDetailInput">
          <input placeholder="Enter your email to get VOUCHER" type="text" />
          <FaLongArrowAltRight className="iconDetailVoucher" />
        </div>
      </div>
    </section>
  );
};

export default Detail;
