"use client";

import HomeBottam from "./homebottam";
import Icon from "./icns";
import Image from "next/image";
import mypic from "../public/pics/my pic.jpeg";
import { useState } from "react";
import Link from "next/link";
export default function Homesection() {
  const [buttonhover, setButtonhover] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "68%",
          paddingTop: "50px",
          height: "75%",
          backgroundColor: "",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{ color: "white" }}>Frontend Developer</h4>
          <h1 style={{ fontSize: "45px", color: "white" }}>Hello I am</h1>
          <h1 style={{ fontSize: "45px", color: "#0b62d4" }}>Hassaan Arain</h1>
          <p style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis non
            blanditiis voluptas maiores debitis. Vel harum fuga eius
            consequuntur illo ullam tempore dignissimos!
          </p>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <Link href="/contact">
         
              <button
                style={{
                  // color: "#0b62d4",
                  height: "40px",
                  border: "1px solid #0b62d4",
                  width: "100px",
                  borderRadius: "30px",
                  color: buttonhover ? "#010512" : "#0b62d4",
                  backgroundColor: buttonhover ? "#0b62d4" : "#010512",
                  transition : "all 0.5s ease-in-out",
                }}
                onMouseEnter={() => setButtonhover(true)}
                onMouseLeave={() => setButtonhover(false)}
              >
                Contact
              </button>
            </Link>

            <Icon />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <Image
              src={mypic}
              alt="MyPic"
              width={299}
              style={{
                borderRadius: "50%",
                marginLeft: "60px",
                borderTop: "2px solid #0b62d4",
                borderBottom: "2px solid #0b62d4",
                borderRight: "3px solid #0b62d4",
              }}
            />
          </div>
        </div>
      </div>
      <HomeBottam />
    </div>
  );
}
