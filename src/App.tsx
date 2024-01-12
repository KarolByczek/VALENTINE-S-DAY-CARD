import React from "react";
import { Pictureswitcher } from "./Pictureswitcher";
import Pictureone from "./images/IMG_20230401_222604.jpg";
import Picturetwo from "./images/z0001062151q21.jpg";
import Picturethree from "./images/z0001062152vi2.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Pictureswitcher
        className={"image"}
        source={Pictureone}
        alternate={"photo one"}
      />
      <Pictureswitcher
        className={"image"}
        source={Picturetwo}
        alternate={"photo two"}
      />
      <Pictureswitcher
        className={"image"}
        source={Picturethree}
        alternate={"photo three"}
      />
    </div>
  );
}

export default App;
