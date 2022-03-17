import logo from "./logo.svg";
// https://www.youtube.com/watch?v=_hbvq1TuZs8
// https://www.apple.com/benl/macbook-pro-14-and-16/
// https://www.youtube.com/watch?v=rJ1PLXS5Ns0
import "./App.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// 2 hooks you need with GSAP
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
// 2 lines to import ScrollTrigger

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 3});
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
      </header>
    </div>
  );
}

export default App;
