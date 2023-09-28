import React from "react";

function Filter({ filterText, filterRate }) {
  return (
    <>
      <div className="filterbox">
        <div>
          <input
            type="text"
            placeholder="Chercher un film..."
            className="filterbox"
            style={{ background: "#E5E5E5", border: "none" }}
            onChange={(e) => filterText(e.target.value)}
          />
        </div>
        <div className="eti">
          <div
            count={5}
            onChange={(newRating) => filterRate(newRating)}
            size={35}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </>
  );
}

export default Filter;
