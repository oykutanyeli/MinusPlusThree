import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import xImage from "./assets/x.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const sumButton = () => {
    setCount((sumState) => sumState + 3);
  };
  const subButton = () => {
    setCount((sumState) => sumState - 3);
  };
  return (
    <>
      <div>
        <img
          src={xImage}
          alt="x"
          width={200}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "200px",
            height: "200px",
          }}
        />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          şu anki değerimiz: {count}
        </button>
        <p>Çalışma Sahibi: ÖYKÜ TANYELİ</p>
      </div>
      <p className="read-the-docs">
        Aşağıdaki butondan toplama ve çıkarma yapabilirsiniz. Ama unutmayın ki
        3'er 3'er ekler ve 3'er 3'er çıkartır!
      </p>
      <button onClick={sumButton}> +3 Ekle </button>
      <button onClick={subButton}> -3 Çıkar </button>
    </>
  );
}

export default App;
