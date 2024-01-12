import { useState, MouseEvent } from "react";
import { Picture } from "./Pictureswitcher";
import Pictureone from "./images/IMG_20230401_222604.jpg";
import Picturetwo from "./images/z0001062151q21.jpg";
import Picturethree from "./images/z0001062152vi2.jpg";
import "./App.scss";

const Pictureswitcher = (event:MouseEvent<HTMLImageElement>) => {
  //document.documentElement.style.setProperty("--border-color", "green");
  event.currentTarget.style.borderColor = "green";
};

function App() {
  return (
    <div className="App">
      <Picture
        className={"image"}
        source={Pictureone}
        alternate={"photo one"}
        onClick={Pictureswitcher}
      />
      <Picture
        className={"image"}
        source={Picturetwo}
        alternate={"photo two"}
        onClick={Pictureswitcher}
      />
      <Picture
        className={"image"}
        source={Picturethree}
        alternate={"photo three"}
        onClick={Pictureswitcher}
      />
    </div>
  );
}

export default App;
