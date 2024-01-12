import React from "react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";
import { ExampleForm } from "./components/ExampleForm";
import Pictureone from "./images/IMG_20230401_222604.jpg";
import Picturetwo from "./images/z0001062151q21.jpg";
import Picturethree from "./images/z0001062152vi2.jpg";
import "./App.scss";


const Pictureswitcher = (event:MouseEvent<HTMLImageElement>) => {
  if (event.currentTarget.style.borderColor === "red") {
    event.currentTarget.style.borderColor = "green";
    event.currentTarget.classList.add("active");
  }
   else {
    event.currentTarget.style.borderColor = "red";
    event.currentTarget.classList.remove("active");
  }
};

const useInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
  const [store, setStore] = useState<string>("");

  setStore(store.concat(event.currentTarget.value));

};

function App() {
  return (
    <div className="App">
      <div className="pictures">
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
      <div className="inputs">
        <ExampleForm type={"text"} onChange={useInputHandler} />
        <ExampleForm type={"text"} onChange={useInputHandler} />
      </div>
    </div>
  );
}

export default App;
