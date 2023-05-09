import { useState, useEffect } from "react";

let Birthdays = () => {
  const [birthdays, setBirthdays] = useState([
    { name: "Tanmoy Saha", date: "2000-01-02" },
    { name: "Debjani Chanda", date: "1999-04-02" },
    { name: "Bhaskar Saha", date: "2000-01-12" },
    { name: "Rahul Saha", date: "2002-05-12" },
    { name: "Subir Baidya", date: "1999-02-03" },
  ]);
  const [createBirthday, setCreateBirthday] = useState("");
  const [createDate, setCreateDate] = useState("");
  const deleteBirthday = (name) => {
    setBirthdays(
      birthdays.filter((birthday) => {
        return birthday.name !== name;
      })
    );
  };
  const addBirthday = () => {
    const newBirthday = { name: createBirthday, date: createDate };
    setBirthdays([...birthdays, newBirthday]);
    setCreateBirthday("");
    setCreateDate("");
  };

  return (
    <div>
      <h1>Upcoming Birthdays List</h1>
      <div
        style={{
          height: "25vh",
          border: "3px black groove",
          padding: "25px",
          backgroundColor: "whiteSmoke",
          margin: "15px",
          padding: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <label>Name : </label>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ width: "480px", height: "35px" }}
            value={createBirthday}
            onChange={(e) => setCreateBirthday(e.target.value)}
          />
        </p>
        <p>
          <label>Date : </label>
          <input
            type="date"
            style={{ width: "480px", height: "35px" }}
            value={createDate}
            onChange={(e) => setCreateDate(e.target.value)}
          />
        </p>
        <button
          onClick={addBirthday}
          style={{ height: "25px", width: "150px" }}
        >
          Add New Birthday
        </button>
      </div>
      <div
        style={{
          padding: "15px",
          margin: "15px",
          border: "3px red groove",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "cadetblue",
        }}
      >
        {birthdays.map((birthday) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
                padding: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Birthday of {birthday.name}</h2>
              <h3>Date : {birthday.date}</h3>
              <button
                onClick={() => deleteBirthday(birthday.name)}
                style={{ height: "25px", width: "150px" }}
              >
                Delete Birthday
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Birthdays;
