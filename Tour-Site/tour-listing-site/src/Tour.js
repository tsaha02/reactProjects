import { useState, useEffect } from "react";

let Tour = () => {
  let [tourData, setTourData] = useState([]);
  useEffect(() => {
    const data = async () => {
      let fetchData = await fetch("https://course-api.com/react-tours-project");
      let result = await fetchData.json();
      //   console.log(result);
      setTourData(result);
    };
    data();
  }, []);

  let deleteTour = (id) => {
    let filteredList = tourData.filter((tour) => tour.id !== id);
    setTourData(filteredList);
    console.log(id);
  };

  return (
    <div>
      <h1>
        <u>Tour Listing Site</u>
      </h1>
      {tourData.map((item) => {
        return (
          <div key={item.id} style={{ margin: "50px" }}>
            <h2>Tour : {item.name}</h2>
            <h3>Description : {item.info}</h3>
            <img src={item.image} alt={item.id} height="250x" width="350px" />
            <h2>
              <i>Price : {item.price} </i>
            </h2>
            <button onClick={() => deleteTour(item.id)}>Not Interested</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default Tour;
