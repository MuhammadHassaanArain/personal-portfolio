"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  const [buttom, setButton] = useState(false);
  return (
    <div style={{ backgroundColor: "#010512" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "#010512",
          width: "68%",
          height: "547px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              backgroundColor: "#020f3b",
              width: "100%",
              margin: "0 auto",
              height: "85%",
              marginTop: "35px",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "#0b62d4",
                fontSize: "35px",
                marginLeft: "30px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Lets work together
            </h2>
            <p
              style={{
                color: "gray",
                marginLeft: "30px",
                marginBottom: "20px",
              }}
            >
              Contact First to get the Best Deal!
            </p>
            <form action="">
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <input
                    style={{
                      border: "1px solid gray",
                      backgroundColor: "#010512",
                      marginBottom: "15px",
                      height: "35px",
                      paddingLeft: "10px",
                      color: "white",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #0b62d4")
                    }
                    onBlur={(e) => (e.target.style.border = "none")}
                    type="text"
                    placeholder="Firstname"
                  />
                  <input
                    style={{
                      border: "1px solid gray",
                      backgroundColor: "#010512",
                      marginBottom: "15px",
                      height: "35px",
                      paddingLeft: "10px",
                      color: "white",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #0b62d4")
                    }
                    onBlur={(e) => (e.target.style.border = "none")}
                    type="text"
                    placeholder="Lastname"
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <input
                    style={{
                      border: "1px solid gray",
                      backgroundColor: "#010512",
                      marginBottom: "15px",
                      height: "35px",
                      paddingLeft: "10px",
                      color: "white",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #0b62d4")
                    }
                    onBlur={(e) => (e.target.style.border = "none")}
                    type="email"
                    placeholder="Email adress"
                  />
                  <input
                    style={{
                      border: "1px solid gray",
                      backgroundColor: "#010512",
                      marginBottom: "15px",
                      height: "35px",
                      paddingLeft: "10px",
                      color: "white",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #0b62d4")
                    }
                    onBlur={(e) => (e.target.style.border = "none")}
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="services"
                  style={{
                    color: "gray",
                    border: "1px solid gray",
                    marginLeft: "25px",
                  }}
                >
                  <select
                    name="service"
                    id="service"
                    style={{
                      backgroundColor: "#010512",
                      paddingLeft: "10px",
                      width: "89%",
                      height: "35px",
                      marginBottom: "15px",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #0b62d4")
                    }
                    onBlur={(e) => (e.target.style.border = "none")}
                  >
                    <option value="" disabled selected hidden>
                      Select a service
                    </option>

                    <option value="service1">Frontent Web-Development</option>
                    <option value="service2">CLI-Projects</option>
                    <option value="service3">Next.js/React.js Projects</option>
                    <option value="service4">
                      Javascript/Typescript Projects
                    </option>
                    <option value="service5">HTML/CSS Projects</option>
                  </select>
                </label>
              </div>
              <div>
                <textarea
                  style={{
                    backgroundColor: "#010512",
                    border: "1px solid gray",
                    width: "89%",
                    marginLeft: "25px",
                    height: "130px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    marginBottom: "12px",
                    color: "white",
                    outline: "none",
                    borderRadius: "5px",
                  }}
                  placeholder="Type your Message here."
                  onFocus={(e) => (e.target.style.border = "1px solid #0b62d4")}
                  onBlur={(e) => (e.target.style.border = "none")}
                />
              </div>
            </form>
            <button
              type="submit"
              style={{
                // backgroundColor: "#0b62d4",
                borderRadius: "50px",
                height: "35px",
                width: "130px",
                marginLeft: "30px",
                border: "1px solid #0b62d4",
                color: buttom ? "#010512" : "#0b62d4",
                backgroundColor: buttom ? "#0b62d4" : "#010512",
              }}
              onMouseEnter={() => setButton(true)}
              onMouseLeave={() => setButton(false)}
            >
              Send message
            </button>
          </div>
        </div>
        {/* right side */}
        <div
          style={{
            width: "50%",
            height: "450px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              paddingTop: "130px",
              paddingLeft: "60px",
            }}
          >
            <div style={{ display: "flex" }}>
              <FaPhoneAlt
                style={{
                  backgroundColor: "#020f3b",
                  height: "50px",
                  width: "50px",
                  color: "#0b62d4",
                  borderRadius: "5px",
                  padding: "12px",
                }}
              />
              <div style={{ paddingLeft: "30px" }}>
                <h1 style={{ color: "gray" }}>Phone</h1>
                <h1 style={{ color: "white" }}>(+92) 327 378 9477</h1>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <MdEmail
                style={{
                  backgroundColor: "#020f3b",
                  height: "50px",
                  color: "#0b62d4",
                  width: "50px",
                  borderRadius: "5px",
                  padding: "12px",
                }}
              />
              <div style={{ paddingLeft: "30px" }}>
                <h1 style={{ color: "gray" }}>Email</h1>
                <h1 style={{ color: "white" }}> hassaanarain008@gmail.com</h1>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <FaLocationDot
                style={{
                  backgroundColor: "#020f3b",
                  color: "#0b62d4",
                  height: "50px",
                  width: "50px",
                  borderRadius: "5px",
                  padding: "12px",
                }}
              />
              <div style={{ paddingLeft: "30px" }}>
                <h1 style={{ color: "gray" }}> Adress</h1>
                <h1 style={{ color: "white" }}> Hyderabad Sindh,Pakistan</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
