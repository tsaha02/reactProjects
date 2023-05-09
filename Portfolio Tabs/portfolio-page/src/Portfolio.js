import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

let Portfolio = () => {
  let [job, setJob] = useState([]);
  let [value, setValue] = useState(0);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchData = async () => {
      let data = await fetch("https://course-api.com/react-tabs-project");
      data = await data.json();
      console.log(data);
      setJob(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { title, company, dates, duties } = job[value];
  console.log(title);

  return (
    <div>
      <div
        style={{
          minWidth: "80vw",
          margin: "15px",
          padding: "15px",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "ButtonFace",
        }}
      >
        {job.map((item, index) => {
          return (
            <button
              style={{
                width: "250px",
                height: "35px",
                border: "none",
                fontSize: "large",
              }}
              className="btnNav"
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "start", padding: "50px" }}>
        <h2> {title}</h2>
        <p>
          <strong>Company Name : </strong>
          {company}
        </p>
        <p>{dates}</p>
        {duties.map((duty) => {
          return (
            <ul>
              <li>{duty}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
