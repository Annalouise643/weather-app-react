import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="enter a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
