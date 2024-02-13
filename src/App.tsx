
import { useState, ChangeEvent, MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";
import Kasia from './images/10.jpeg';
import Heart from './images/Red-Heart-Love.png.png';
import "./App.scss";


const Pictureswitcher = (event:MouseEvent<HTMLImageElement>) => {
  if (event.currentTarget.classList.contains('Kasia_Kozak')) {
    const $hearts:NodeListOf<Element> = document.querySelectorAll('.heart');
    $hearts.forEach((image:Element) => {
      image.classList.add('active');
      image.classList.remove('heart')
    });
  }
   else {
    const $images:NodeListOf<Element> = document.querySelectorAll('.active');
    $images.forEach((image:Element) => {
      image.classList.remove('active');
      image.classList.add('heart')
    });
  }
};



function App() {
  

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
