import ButtonsComp from "./components/ButtonsComp.js";
import PhotoBoxComp from "./components/PhotoBoxComp.js";
import React from "./miniReact.js";

export default function App({ $target }) {
  this.$buttons = document.createElement("div");
  this.$photobox = document.createElement("div");
  $target.append(this.$buttons, this.$photobox);
  const onRerender = () => {
    React.increaseRenderId();
    React.initCursor();
    new ButtonsComp({ $element: this.$buttons, onRerender });
    new PhotoBoxComp({
      $element: this.$photobox,
      onRerender,
      src: "https://reactjs-kr.firebaseapp.com/logo-og.png",
    });
  };

  onRerender();
}
