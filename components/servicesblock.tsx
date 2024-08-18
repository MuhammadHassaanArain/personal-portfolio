"use client";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { CgArrowBottomRightO } from "react-icons/cg";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import { PiNumberSquareSixFill } from "react-icons/pi";
import { useState } from "react";
export default function Servicesblock() {
  const [arrow, setArrow] = useState(false);
  const [arrow11, setArrow11] = useState(false);
  const [arrow22, setArrow22] = useState(false);
  const [arrow33, setArrow33] = useState(false);
  const [arrow44, setArrow44] = useState(false);
  const [arrow55, setArrow55] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#010512",
        paddingTop: "100px",
        height: "580px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{ display: "flex", marginBottom: "50px", paddingLeft: "80px" }}
      >
        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            // backgroundColor:"pink",
            width: "40%",
            borderBottom: "1px solid gray",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareOneFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",
                color: arrow ? "010512" : "0b62d4",
                backgroundColor: arrow ? "0b62d4" : "#010512",
                borderRadius: arrow ? "50%" : "",
                transform: arrow ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow(true)}
              onMouseLeave={() => setArrow(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            Web Development
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
        {/* anothe block */}

        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            width: "40%",
            borderBottom: "1px solid gray",
            marginLeft: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareTwoFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",

                color: arrow11 ? "010512" : "0b62d4",
                backgroundColor: arrow11 ? "0b62d4" : "010512",
                borderRadius: arrow11 ? "50%" : "",
                transform: arrow11 ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow11(true)}
              onMouseLeave={() => setArrow11(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            CLI-Projects
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
      </div>
      {/* end block 2 */}
      {/* start block 3 */}

      <div
        style={{ display: "flex", marginBottom: "50px", paddingLeft: "80px" }}
      >
        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            width: "40%",
            borderBottom: "1px solid gray",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareThreeFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",

                color: arrow22 ? "010512" : "0b62d4",
                backgroundColor: arrow22 ? "0b62d4" : "#010512",
                borderRadius: arrow22 ? "50%" : "",
                transform: arrow22 ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow22(true)}
              onMouseLeave={() => setArrow22(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            React.js Projects
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
        {/* end block 3 */}
        {/*  start block 4 */}
        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            width: "40%",
            borderBottom: "1px solid gray",
            marginLeft: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareFourFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",

                color: arrow33 ? "010512" : "0b62d4",
                backgroundColor: arrow33 ? "0b62d4" : "#010512",
                borderRadius: arrow33 ? "50%" : "",
                transform: arrow33 ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow33(true)}
              onMouseLeave={() => setArrow33(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            HTML & CSS Projects
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
      </div>
      {/* end block 4 */}
      {/* start block 5*/}

      <div
        style={{ display: "flex", paddingLeft: "80px", paddingBottom: "80px" }}
      >
        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            width: "40%",
            borderBottom: "1px solid gray",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareFiveFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",

                color: arrow44 ? "010512" : "0b62d4",
                backgroundColor: arrow44 ? "0b62d4" : "#010512",
                borderRadius: arrow44 ? "50%" : "",
                transform: arrow44 ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow44(true)}
              onMouseLeave={() => setArrow44(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            Type/Javascript Projects
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
        {/* end block 5 */}
        {/*  start block 6 */}
        <div
          style={{
            backgroundColor: "#010512",
            height: "185px",
            width: "40%",
            borderBottom: "1px solid gray",
            marginLeft: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <PiNumberSquareSixFill
              style={{
                height: "60px",
                width: "60px",
                background: "#010512",
                color: "0b62d4",
              }}
            />
            <CgArrowBottomRightO
              style={{
                height: "60px",
                width: "60px",
                marginLeft: "275px",

                color: arrow55 ? "010512" : "0b62d4",
                backgroundColor: arrow55 ? "0b62d4" : "#010512",
                borderRadius: arrow55 ? "50%" : "",
                transform: arrow55 ? "rotate(315deg)" : "none",
                transition: "2s",
              }}
              onMouseEnter={() => setArrow55(true)}
              onMouseLeave={() => setArrow55(false)}
            />
          </div>
          <h1
            style={{ fontSize: "30px", color: "white", paddingBottom: "15px" }}
          >
            Next.js 13 Projects
          </h1>
          <p style={{ color: "gray" }}>
            Fully Frontent website using with Next.js/React.js,
            Typescript/Javascript & Tailwind CSS
          </p>
        </div>
      </div>
      {/* end block 6 */}
    </div>
  );
}
