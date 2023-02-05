// import React from 'react';  comment: we can remove this because we dont need to write this anymore, as its already taken care of
import { createRoot } from 'react-dom';
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Oscar",
//       breed: "Labrador Retriever",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Doink",
//       breed: "Mixed",
//     }),
//   ]);
// };

// now we are going to write the same thing which is in the comment above in jsx.

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Oscar" animal="dog" breed="Labrador Retriever" />
    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="cat" breed="Mixed" />
  </div>;
}

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App/>)