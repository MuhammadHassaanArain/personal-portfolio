"use client";
import { useState } from "react";
export default function About() {
  const [color, setColor] = useState(false);
  return (
    <div style={{ backgroundColor: "#010512", width: "60%", height: "600px" }}>
      <div
        style={{
          backgroundColor: "#010512",
          width: "550px",
          height: "500px",
          marginLeft: "50px",
          // borderLeft:"1px solid #0b62d4"
        }}
      >
        <h1
          style={{
            // color: "white",
            fontSize: "30px",
            paddingTop: "50px",
            marginBottom: "15px",
            color: color ? "#0b62d4" : "white",
            width:"160px",
          //  backgroundColor:'pink',
            borderBottom: "1px solid #0b62d4",
          }}
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
        >
          About me
        </h1>
        <p style={{ color: "gray", paddingBottom: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing <br />
          elit. Consectetur placeat.
        </p>
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Name</h1>
              <h1 style={{ color: "white" }}>Muhmmad Hassaan</h1>
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Phone</h1>
              <h1 style={{ color: "white" }}>(+92)327-3789477</h1>
            </div>
          </div>
          <div style={{ marginLeft: "80px" }}>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Experience</h1>
              <h1 style={{ color: "white" }}>08 Months</h1>
            </div>
            <div style={{ display: "flex" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Status</h1>
              <h1 style={{ color: "white" }}>Student</h1>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>
                Nationality
              </h1>
              <h1 style={{ color: "white" }}>Pakistani</h1>
            </div>
            <div style={{ display: "flex" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Email</h1>
              <h1 style={{ color: "white" }}>hassaanarain008@gmail.com</h1>
            </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Freelance</h1>
              <h1 style={{ color: "white" }}>Available</h1>
            </div>
            <div style={{ display: "flex" }}>
              <h1 style={{ color: "gray", marginRight: "15px" }}>Language</h1>
              <h1 style={{ color: "white" }}>Urdu,English,Punjabi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
