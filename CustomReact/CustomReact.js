function customRender(element,container) {
    const divElement = document.createElement(element.type);
    const hTag = document.createElement("h1")
    hTag.textContent = element.children;
    const imageElement = document.createElement(element.props.type);
    imageElement.src = element.props.src;
    divElement.appendChild(hTag);
    divElement.appendChild(imageElement);
    container.appendChild(divElement);
  
}



const reactElement = {
  type: "div",
  props: {
    href: "http://google.com",
    target: "_blank",
    type: "img",
    src: "https://i.pravatar.cc/150?img=3",
    alt: "Logo",
  },  
  children :'I am h1',
};

const mainContiner = document.getElementById("root");  

customRender(reactElement,mainContiner);