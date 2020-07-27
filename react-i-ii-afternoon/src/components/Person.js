import React from "react";
import "../App.css";

function Person({ per, count }) {
  return (
    <div className="person">
      <div className="personWrap">
      <span className="count">{count + 1}/25</span>
        <p className="name">
          <strong>
            {per.name.first} {per.name.last}
          </strong>
        </p>
        <strong> From: </strong> {per.city}
        <p>
          <strong> Job Title: </strong> {per.title}
        </p>
        <p>
          {" "}
          <strong> Employer: </strong> {per.employer}
        </p>
        <p>
          <strong> Favorite Movies: </strong>
        </p>
        <ol>
          {per.favoriteMovies.map((movie, i) => (
            <li key={i}>{movie}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Person;
