import React, {useState, useEffect} from 'react'
import axios from "axios";
import Select from "react-select";
import styles from "../styleSheet/Search.module.css";
import { Link } from "react-router-dom";


function Search() {
    const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  // Fetch states from the API
  async function fetchStates() {
    try {
      const response = await axios.get("http://localhost:4400/location");
      setStates(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Fetch restaurants based on the selected state
  async function fetchRestaurants() {
    try {
      const response = await axios.get(
        `http://localhost:4400/restaurants?stateId=${selectedState}`
      );
      setRestaurants(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchRestaurants();
    }
  }, [selectedState]);

  const stateOptions = states.map((data) => ({
    value: data.state_id,
    label: data.state,
  }));

  const restaurantOptions = restaurants.map((data) => ({
    value: data.restaurant_id,
    label: (
      <Link to={`/details?restId=${data.restaurant_id}`} className={styles.link}>
        <img className={styles.searchImg} src={data.restaurant_thumb} alt="" />
        <h6 className={styles.restaurantName}>{data.restaurant_name}</h6>
        <p className={styles.restaurantAddress}>{data.address}</p>
   
      </Link>
    ),
  }));

  return (
    <>
    <div className={styles.dropownContainer}>
        <Select className={styles.select}
          options={stateOptions}
          placeholder="-- Select your location --"
          onChange={(selectedOption) =>
            setSelectedState(selectedOption.value)
          }
        />
        <Select className={styles.select}
          options={restaurantOptions}
          placeholder="-- Select restaurants --"
        />
        </div>

    </>
  )
}

export default Search
