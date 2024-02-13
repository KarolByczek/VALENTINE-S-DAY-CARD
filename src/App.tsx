
import { useState, ChangeEvent, MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";
import Kasia from './images/10.jpeg';
import Heart from './images/Red-Heart-Love.png.png';
import "./App.scss";


const Pictureswitcher = (event:MouseEvent<HTMLImageElement>) => {
  if (event.currentTarget.classList.contains('Kasia_Kozak')) {
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
        className="Kasia_Kozak"
        source={Kasia}
        alternate="Kasia"
        onClick={Pictureswitcher}
      />
      <h3>KLIKNIJ KASIĘ ⬆</h3>
      <Picture 
        className="heart heart01"
        source={Heart}
        alternate="heart"
        onClick={() => window.alert('WSZYSTKIEGO NAJLEPSZEGO Z OKAZJI WALENTYNEK!!!:)')}
      />
    </div>
  );
}

export default App;
