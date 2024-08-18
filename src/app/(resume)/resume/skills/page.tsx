import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
export default function Skills() {
  return (
    <div style={{ backgroundColor: "#010512", width: "810px" }}>
      <div
        style={{
          backgroundColor: "#010512",
          height: "390px",
          width: "580px",
          marginTop: "50px",
          marginLeft: "70px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "30px",
            marginBottom: "15px",
            // backgroundColor: "pink",
            width: "150px",
            borderBottom: "1px solid #0b62d4",
          }}
        >
          My Skills
        </h1>
        <h1 style={{ color: "gray", paddingBottom: "30px" }}>
          HTML 5 | CSS 3 | Typescript | Javascript | React.js | Tailwind CSS |
          Node.js | Next.js | Git & Github
         
        </h1>
        <div
          style={{
            backgroundColor: "#010512",
            height: "250px",
            width: "580px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingBottom: "30px",
            }}
          >
            <FaHtml5
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
            <FaCss3
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
            <IoLogoJavascript
              style={{
                height: "100px",
                width: "100px",
                color: "#0b62d4",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
              }}
            />

            <FaReact
              style={{
                color: "#0b62d4",
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <TbBrandTypescript
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
            <SiNextdotjs
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
            <RiTailwindCssFill
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
            <IoLogoNodejs
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#020f3b",
                padding: "20px",
                borderRadius: "5px",
                color: "#0b62d4",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
