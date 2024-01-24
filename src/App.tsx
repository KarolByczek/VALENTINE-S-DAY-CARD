
import { useState, ChangeEvent, MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";
import { ExampleForm } from "./components/ExampleForm";
import { ExampleList } from "./components/ExampleList";
import Pictureone from "./images/IMG_20230401_222604.jpg";
import Picturetwo from "./images/z0001062151q21.jpg";
import Picturethree from "./images/z0001062152vi2.jpg";
import "./App.scss";


const Pictureswitcher = (event:MouseEvent<HTMLImageElement>) => {
  if (event.currentTarget.classList.contains('image')) {
    const $images:NodeListOf<Element> = document.querySelectorAll('.image');
    $images.forEach((image:Element) => {
      image.classList.add('active');
      image.classList.remove('image')
    });
  }
   else {
    const $images:NodeListOf<Element> = document.querySelectorAll('.active');
    $images.forEach((image:Element) => {
      image.classList.remove('active');
      image.classList.add('image')
    });
  }
};

const ListBrightener = (event:MouseEvent<HTMLUListElement>) => {
  event.currentTarget.style.color = "green";
};

const ListDarkener = (event:MouseEvent<HTMLUListElement>) => {
  event.currentTarget.style.color = "black";
};


function App() {
  
  const [store, setStore] = useState<string>("");

  const useInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
   setStore(event.currentTarget.value) 
  }; 


  return (
    <div className="App">
      <div className="images">
      <Picture
        className={"image"}
        source={Pictureone}
        alternate={"photo01"}
        onClick={Pictureswitcher}
      />
      <Picture
        className={"image"}
        source={Picturetwo}
        alternate={"photo02"}
        onClick={Pictureswitcher}
      />
      <Picture
        className={"image"}
        source={Picturethree}
        alternate={"photo03"}
        onClick={Pictureswitcher}
      />
      </div>
      <div className="inputs">
        <ExampleForm type={"text"} onChange={useInputHandler} value={store}/>
        <ExampleForm type={"text"} onChange={() => {}} value={store} />
      </div>
      <div className="list">
        <ExampleList children={store} onHover={ListBrightener} onRemove={ListDarkener}/>
      </div>
    </div>
  );
}

export default App;
