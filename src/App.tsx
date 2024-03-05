import { MouseEvent } from "react";
import { Picture } from "./components/Pictureswitcher";
import Kasia from "./images/10.jpeg";
import Heart from "./images/Red-Heart-Love.png.png";
import "./App.scss";

const Pictureswitcher = (event: MouseEvent<HTMLImageElement>) => {
  if (event.currentTarget.classList.contains("Kasia_Kozak")) {
    const $hearts: NodeListOf<Element> = document.querySelectorAll(".heart");
    const $clue: any = document.querySelector("#clue");
    const $signs: any = document.querySelectorAll(".sign");
    $hearts.forEach((image: Element) => {
      image.classList.add("active");
      image.classList.remove("heart");
    });
    $signs.forEach((sign: HTMLElement) => {
      sign.classList.add("sign_vis");
    });
    $clue.style.display = "none";
    //window.alert('WSZYSTKIEGO NAJLEPSZEGO Z OKAZJI WALENTYNEK!!!:)')
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
      <h3 id="clue">KLIKNIJ KASIĘ ⬆</h3>
      <h1 className="sign sign_left">WSZYSTKIEGO</h1>
      <h1 className="sign sign_right">NAJLEPSZEGO!!!</h1>
      <div className="heart_container">
        
       
        <Picture
          className="heart heart04"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart05"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart06"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart07"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart08"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart09"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart10"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart11"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart12"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart13"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
        <Picture
          className="heart heart14"
          source={Heart}
          alternate="heart"
          onClick={() => console.log("See ya later!")}
        />
      </div>
    </div>
  );
}

export default App;
