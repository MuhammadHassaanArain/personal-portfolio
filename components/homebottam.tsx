export default function HomeBottam() {
  return (
    <div style={{ width: "68%", height: "190px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          paddingTop: "60px",
          color: "gray",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "white", paddingRight: "220px" }}>
          08
        </h1>
        <h1 style={{ fontSize: "50px", color: "white", paddingRight: "210px" }}>
          15
        </h1>
        <h1 style={{ fontSize: "50px", color: "white", paddingRight: "160px" }}>
          09
        </h1>
        <h1 style={{ fontSize: "50px", color: "white" }}>120+</h1>
      </div>
      <div
        style={{
          display: "flex",
          color: "gray",
          paddingLeft: "70px",
          marginTop: "-60px",
          justifyContent: "space-between",
        }}
      >
        <h1>
          Months of
          <br /> experience
        </h1>
        <h1>
          projects <br />
          completed
        </h1>
        <h1>
          technology
          <br /> mastered
        </h1>
        <h1>
          code <br />
          commits
        </h1>
      </div>
    </div>
  );
}
