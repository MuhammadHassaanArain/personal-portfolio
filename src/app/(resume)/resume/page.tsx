import Navforresume from "../../../../components/navforresume";

export default function Resume() {
  return (
    <div style={{ backgroundColor: "#010512", width: "60%" }}>
      <div
        style={{
          backgroundColor: "#010512",
          height: "400px",
          width: "550px",
          marginLeft: "100px",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "25px",
            paddingBottom: "30px",
            // backgroundColor: "pink",
            width: "330px",
            height: "45px",
            marginBottom: "40px",
            borderBottom: "1px solid #0b62d4",
          }}
        >
          Muhammad Hassaan Arain
        </div>
        <div style={{ color: "gray" }}>
          <div style={{ fontSize: "20px" }}>becoming </div>
          <div style={{ color: "#0b62d4", fontSize: "30px" }}>
            Cloud Certefied Generative AI Engineer.
          </div>
        </div>
        <div style={{ color: "gray" }}>
          <div style={{ fontSize: "20px", paddingTop: "20px" }}>
            {" "}
            Currently Enrolled In{" "}
          </div>
          <div style={{ color: "#0b62d4", fontSize: "30px" }}>
            Governor Sindh Initiative for Artificial Intelligence, Metaverse &
            Web 3.0.
          </div>
        </div>
      </div>
    </div>
  );
}
