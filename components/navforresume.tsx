"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navforresume() {
  const [resumehover, setResumehover] = useState<boolean>(false);
  const [resumehover1, setResumehover1] = useState<boolean>(false);
  const [resumehover2, setResumehover2] = useState<boolean>(false);
  const [resumehover3, setResumehover3] = useState<boolean>(false);
  const [color,setColor] = useState(false); 
  return (
    <div
      style={{ height: "600px", width: "550px", backgroundColor: "#010512" }}
    >
      <div
        style={{
          backgroundColor: "#010512",
          // width: "60%",
          // height: "380px",
          marginLeft: "210px",
          // paddingTop:'30px',
          marginTop: "50px",
          paddingRight:"5px",
          paddingBottom:'30px',
           borderRight:"1px solid #0b62d4",
          borderBottom: "1px solid #0b62d4",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "15px",
            // color: "white",
            color :  color ? "#0b62d4":"white"
            // borderBottom: "1px solid #0b62d4",
          }}
          onMouseEnter={()=>setColor(true)}
          onMouseLeave={()=>setColor(false)}
        >
          Why Hire Me?
        </h1>
        <p style={{ color: "gray", paddingBottom: "30px" }}>
          Lorem ipsum dolor sit amet
          <br />
          Ab, in mollitia? Ullam iste
        </p>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            // justifyContent: "center",
          }}
        >
          {/* <Link
            style={{
              // color: "red",
              // backgroundColor: "#020f3b",
              marginBottom: "20px",
              height: "35px",
              paddingTop: "5px",
              borderRadius: "8px",
              color: resumehover ? "#010512" : "white",
              backgroundColor: resumehover ? "#0b62d4" : "#020f3b",
            }}
            onMouseEnter={() => setResumehover(true)}
            onMouseLeave={() => setResumehover(false)}
            href="/resume/experience"
          >
            Experience
          </Link> */}
          <Link
            style={{
              // color: "color",
              // backgroundColor: "#020f3b",
              marginBottom: "20px",
              height: "35px",
              paddingTop: "5px",
              borderRadius: "8px",
              color: resumehover1 ? "#010512" : "white",
              backgroundColor: resumehover1 ? "#0b62d4" : "#020f3b",
            }}
            onMouseEnter={() => setResumehover1(true)}
            onMouseLeave={() => setResumehover1(false)}
            href="/resume/education"
          >
            Education
          </Link>
          <Link
            style={{
              // color: "color",
              // backgroundColor: "#020f3b",
              marginBottom: "20px",
              height: "35px",
              paddingTop: "5px",
              borderRadius: "8px",
              color: resumehover2 ? "#010512" : "white",
              backgroundColor: resumehover2 ? "#0b62d4" : "#020f3b",
            }}
            onMouseEnter={() => setResumehover2(true)}
            onMouseLeave={() => setResumehover2(false)}
            href="/resume/skills"
          >
            Skills
          </Link>
          <Link
            style={{
              // color: "color",
              // backgroundColor: "#020f3b",
              color: resumehover3 ? "#010512" : "white",
              backgroundColor: resumehover3 ? "#0b62d4" : "#020f3b",
              marginBottom: "20px",
              height: "35px",
              paddingTop: "5px",
              borderRadius: "8px",
            }}
            onMouseEnter={() => setResumehover3(true)}
            onMouseLeave={() => setResumehover3(false)}
            href="/resume/about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
