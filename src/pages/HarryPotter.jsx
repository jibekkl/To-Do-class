import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/header/header";

function HarryHotter() {
  const [user, setUSer] = useState([]);
  const AddTask = () => {
    axios(`https://hp-api.onrender.com/api/characters`).then((res) => {
      setUSer(res.data);
    });
  };
  console.log(user);
  useEffect(() => {
    AddTask();
  }, []);
  return (
    <>
      <Header />

      <div className="container">
        <div className="harry">
          {user.map((el) => (
            <div className="block">
              <img src={el.image} alt="" />
              <h1>{el.name}</h1>
              <p>{el.house}</p>
              <h3>{el.gender}</h3>
              <h3>{el.dateOfBirth}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HarryHotter;
