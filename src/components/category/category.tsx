import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div>
      <div>
        <div>
          <Image
            src={
              "https://cdn.vnda.com.br/adornashop/2023/02/27/17_19_55_379_829955_8d16f380e94b4f19b6c3e25c22d407c7-mv2.jpg?v=1677529195"
            }
            alt={""}
          />
          <button>Rings Collection</button>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            OUR COLLECTION
          </h1>
          <Image
            src={
              "https://cdn.vnda.com.br/adornashop/2023/09/14/15_42_50_454_15_9_2_293_adornarafacouto_porlucasdaneris1min.jpg?v=1694717140"
            }
            alt={""}
          />
          <button>Necklaces Collection</button>
        </div>
        <div>
          {" "}
          <Image
            src={
              "https://cdn.vnda.com.br/adornashop/2023/09/14/16_07_39_831_16_9_3_360_adornarafacouto_porlucasdaneris40min.jpg?v=1694718479"
            }
            alt={""}
          />
          <button>Bracelets Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
