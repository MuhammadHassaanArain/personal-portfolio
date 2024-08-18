"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#020717",
        display: "flex",
        height: "60px",
      }}
    >
      <Link href="/">
        {" "}
        <h1
          style={{
            fontSize: "30px",
            paddingLeft: "220px",
            color: "white",
            marginTop: "-25px",
          }}
        >
          Hassaan <span style={{ color: "#0b62d4", fontSize: "60px" }}>.</span>
        </h1>
      </Link>

      <nav
        style={{
          paddingLeft: "300px",
          paddingTop: "18px",
          color: "white",
          display: "flex",
        }}
      >
        <Link
          className="pl-[25px]"
          href="/"
          style={{
            color: hover === "home" ? "#0b62d4" : "white",
            borderBottom: hover === "home" ? "2px solid #0b62d4" : "none",
          }}
          onMouseEnter={() => setHover("home")}
          onMouseLeave={() => setHover(null)}
        >
          Home
        </Link>
        <Link
          href="/services"
          style={{
            marginLeft: "25px",
            color: hover === "services" ? "#0b62d4" : "white",
            borderBottom: hover === "services" ? "2px solid #0b62d4" : "none",
          }}
          onMouseEnter={() => setHover("services")}
          onMouseLeave={() => setHover(null)}
        >
          Services
        </Link>
        <Link
          href="/resume"
          style={{
            marginLeft: "25px",
            color: hover === "Resume" ? "#0b62d4" : "white",
            borderBottom: hover === "Resume" ? "2px solid #0b62d4" : "none",
          }}
          onMouseEnter={() => setHover("Resume")}
          onMouseLeave={() => setHover(null)}
        >
          Resume
        </Link>
        {/* <Link
          href="/work"
          style={{
            marginLeft: "25px",
            color: hover === "Work" ? "#0b62d4" : "white",
            borderBottom: hover === "Work" ? "2px solid #0b62d4" : "none",
          }}
          onMouseEnter={() => setHover("Work")}
          onMouseLeave={() => setHover(null)}
        >
          Work
        </Link> */}
        <Link
          href="/contact"
          style={{
            marginLeft: "25px",

            color: hover === "Contact" ? "#0b62d4" : "white",
            borderBottom: hover === "Contact" ? "2px solid #0b62d4" : "none",
          }}
          onMouseEnter={() => setHover("Contact")}
          onMouseLeave={() => setHover(null)}
        >
          Contact
        </Link>
      </nav>
      <Link href="/contact">
      
        <button
          style={{
            border: "2px solid #0b62d4",
            height: "40px",
            width: "120px",
            borderRadius: "30px",
            marginLeft: "40px",
            marginTop: "8px",
            backgroundColor: "#0b62d4",
            fontSize: "18px",
          }}
        >
          Hire me
        </button>
      </Link>
    </div>
  );
}
