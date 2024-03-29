import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "../styleSheet/Details.module.css";
import ReactTab from "../components/ReactTab";

function Details() {
  const [details, setDetails] = useState();
  const { search } = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  let restId = search.split("=")[1];

  async function fetchRestId() {
    try {
      const response = await axios.get(
        `http://localhost:4400/restaurants/${restId}`
      );
      setDetails(response.data[0]);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  }

  useEffect(() => {
    fetchRestId();
  }, [restId]);

  function hangleImageClick(image) {
    setSelectedImage(image);
  }

  return (
    <>
    <div className={styles.navbar}>
    <Navbar />
    </div>
   
      <div className={`container p-4 ${styles.container}`}>
        {details ? (
          <>
            <div className={styles.imgArea}>
              {!selectedImage ? (
                <img
                  className={styles.restaurantImg}
                  src={details.restaurant_thumb}
                  alt=""
                />
              ) : (
                <img
                  className={styles.restaurantImg}
                  src={selectedImage}
                  alt=""
                />
              )}
            </div>
            <div className={styles.details}>
              <h5 className={`fs-2 ${styles.title}`}>
                {details.restaurant_name}
              </h5>
              <p>
                {" "}
                <strong>
                  300 customers Say it's "{details.rating_text}" &#129395;
                </strong>
              </p>

              <del>Old price: Rs/- {details.cost + 200}</del>
              <p>
                <strong>New Price: Rs/- {details.cost}</strong>
              </p>
              <div className={styles.imageGallery}>
                {details.image_gallery.map((items, index) => (
                  <img
                    className={styles.showImage}
                    onClick={() => hangleImageClick(items)}
                    key={index}
                    src={items}
                    alt=""
                  />
                ))}
              </div>
              <center>
                <button className={`btn text-bg-danger p-3 `}>
                  PROCEED
                </button>
              </center>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    <div className="container">
      {details ? (
        <ReactTab items={details}/>
      ) : ("")}
       
    </div>

    </>
  );
}

export default Details;
