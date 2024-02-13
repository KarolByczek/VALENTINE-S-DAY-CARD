
import { useState, ChangeEvent, MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";

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
      <Picture
      
      />
    </div>
  );
}

export default App;
