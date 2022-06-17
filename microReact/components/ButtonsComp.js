import React from "../miniReact.js";

export default function ButtonsComp({ $element, onRerender }) {
  const [count, setCount] = React.useState(0);
  const [clover, setClover] = React.useState(false);
  const [soundOn, setSoundOn] = React.useReducer((soundOn) => !soundOn, false);

  const handleCloverToggle = () => {
    setClover(!clover);
    onRerender();
  };
  const handleInc = () => {
    setCount(count + 1);
    onRerender();
  };
  const handleSoundControl = () => {
    setSoundOn();
    onRerender();
  };

  this.render = () => {
    $element.innerHTML = `
    <p>${count}</p>
    <button type="button" class="inc">up</button>
      <p>${clover ? "안한다" : "한다"}</p>
      <button type="button" class="clover">🍀</button>
      <p>${soundOn ? "🔈" : "🔇"}</p>
      <button type="button" class="soundControl">${
        soundOn ? "turn off" : "turn on"
      }</button>
    `;
    $element.querySelector(".inc").addEventListener("click", handleInc);
    $element
      .querySelector(".clover")
      .addEventListener("click", handleCloverToggle);
    $element
      .querySelector(".soundControl")
      .addEventListener("click", handleSoundControl);
  };
  this.render();
}
