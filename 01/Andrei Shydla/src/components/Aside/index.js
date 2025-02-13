import React from "react";
import "./style.css";

const linkLoremForExemple = "Lorem ipsum dolor sit amet";
const numberLinks = 7;

const arrayLinksForExemple = (textLink, number) =>
  new Array(number).fill(textLink);

const listOfLinks = (arrayLinks) =>
  arrayLinks.map((item, index) => (
    <li key={index}>
      <a href="#">{item}</a>
    </li>
  ));

function Aside() {
  const renderListOfLinks = listOfLinks(
    arrayLinksForExemple(linkLoremForExemple, numberLinks)
  );

  return (
    <div className="aside">
      <div className="boxaside">
        <h1>News</h1>
        <p>
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
          набор слов, но это не совсем так. Его корни уходят в один фрагмент
          классической латыни 45 года н.э.
        </p>
      </div>
      <div className="boxaside">
        <h1>Some links</h1>
        <ul className="p2aside">{renderListOfLinks}</ul>
      </div>
    </div>
  );
}

export default Aside;
