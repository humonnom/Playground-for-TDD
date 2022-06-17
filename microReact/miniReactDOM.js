import { isProperty } from "./utils/util.js";

const ReactDOM = (function () {
  const render = (element, $container) => {
    console.log(element);
    const $dom = document.createElement(element.type);

    Object.keys(element.props)
      .filter(isProperty)
      .forEach((propName) => {
        $dom[propName] = element.props[propName];
      });

    element.props.children.forEach((child) => render(child, $dom));
    console.log($dom);
    $container.appendChild($dom);
  };

  return { render };
})();

export default ReactDOM;
