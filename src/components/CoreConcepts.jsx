import React from "react";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcept.jsx";


export default function CoreConcepts() {

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, key) => (
          <CoreConcept key={key} {...conceptItem} />
        ))}
      </ul>
    </section>
  );

}


