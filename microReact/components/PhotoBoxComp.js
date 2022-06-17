import React from "../miniReact.js";
import ReactDOM from "../miniReactDOM.js";
export default function PhotoBoxComp({ $element, onRerender, src }) {
  /* with miniReact.createElement */
  this.render = () => {
    const imgElement = React.createElement(
      "div",
      { id: "apple-img" },
      React.createElement("img", { src: src, width: "300" })
    );
    ReactDOM.render(imgElement, $element);
  };

  this.render();
}

/*
		** with jsx **
		<div id="apple-img">
			<img src="" width="300"/>
		</div>
	*/

/*
	** with React.createElement **
	const imgDiv = React.createElement(
		"div",
		{id: 'apple-img'},
		React.createElement('img', { src:src, width:'300'})
	)
	React.render(imgDiv, $element);
	*/
