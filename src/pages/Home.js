import react from "react";

export default function Home() {
  return (
    <div>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url('/tamarack_org.jpg')",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "50vh",
          backgroundPositionY: "center",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            width: "100%",
            minHeight: "50vh",
          }}
        >
          <div className="d-flex justify-content-center align-items-center height-500-px text-white">
            <div>
              <h1>Madalyn & Wesley</h1>
              <p>Date: TBD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vh-50 p-5">
        <div className="light-color mt-neg-200-px min-height-300-px">test</div>
      </div>
    </div>
  );
}
