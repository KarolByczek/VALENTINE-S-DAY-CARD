import React from "react";
import { Pictureswitcher } from "./Pictureswitcher";
import Pictureone from "./images/IMG_20230401_222604.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Pictureswitcher
        className={"image"}
        source={Pictureone}
        alternate={"photo one"}
      />
    </div>
  );
}

export default App;
