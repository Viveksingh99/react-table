import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      Search:{"  "}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default GlobalFilter;
