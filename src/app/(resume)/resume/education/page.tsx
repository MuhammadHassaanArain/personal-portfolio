export default function Education() {
  return (
    <div
      style={{
        backgroundColor: "#010512",
        paddingLeft: "50px",
        width: "800px",
      }}
    >
      <div style={{ backgroundColor: "#010512", width: "600px" }}>
        <h1
          style={{
            color: "white",
            fontSize: "30px",
            paddingTop: "50px",
            // backgroundColor: "pink",
            width: "200px",
            borderBottom: "1px solid #0b62d4",
          }}
        >
          My Education
        </h1>
        <p style={{ color: "gray", marginTop: "15px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          nostrum <br /> animi aperiam! Laborum accusamus rem est,
        </p>

        {/* 1 */}
        {/*  */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: "#020f3b",
                width: "280px",
                height: "150px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1 style={{ color: "#0b62d4", marginBottom: "10px" }}>
                Feb-Aug
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "15px",
                }}
              >
                Web Development
              </h1>
              <div style={{ color: "gray", display: "flex" }}>
                <h1 style={{ color: "#0b62d4", paddingRight: "10px" }}>•</h1>
                <h1>GIAIC-Quarter-1</h1>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div
              style={{
                backgroundColor: "#020f3b",
                width: "280px",
                height: "150px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1 style={{ color: "#0b62d4", marginBottom: "10px" }}>
                2022-2024
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "15px",
                }}
              >
                Matriculation (SSC)
              </h1>
              <div style={{ color: "gray", display: "flex" }}>
                <h1 style={{ color: "#0b62d4", paddingRight: "10px" }}>•</h1>
                <h1>FGPS Hyderabad Cantt</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: "#020f3b",
                width: "280px",
                height: "150px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1 style={{ color: "#0b62d4", marginBottom: "10px" }}>April</h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "15px",
                }}
              >
                HTML-CSS
              </h1>
              <div style={{ color: "gray", display: "flex" }}>
                <h1 style={{ color: "#0b62d4", paddingRight: "10px" }}>•</h1>
                <h1>Online Platform</h1>
              </div>
            </div>
          </div>

          {/* 4 */}

          <div>
            <div
              style={{
                backgroundColor: "#020f3b",
                width: "280px",
                // height: "170",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1 style={{ color: "#0b62d4", marginBottom: "10px" }}>2024</h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "15px",
                }}
              >
                React/Next.js
              </h1>
              <div style={{ color: "gray", display: "flex" }}>
                <h1 style={{ color: "#0b62d4", paddingRight: "10px" }}>•</h1>
                <h1>IT Mate PK</h1>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
