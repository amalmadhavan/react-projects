import React, { useState } from "react";

function App() {
  return <div>
    <h1> React File Tree App </h1>
    <Folder name="Desktop" >
      <File name="cats.png" />
      <File name="dogs.pdf" />
      <Folder name="music">
        <File name="king.mp3" />
        <File name="attention.mp3" />
      </Folder>
    </Folder>
    <Folder name="Applications" >
      <File name="chrome" />
      <File name="fortnite" />
    </Folder>
  </div>

}

// React Component name should always start with a Capital letter

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { name, children } = props
  const arrowDir = isOpen ? "down" : "right"

  const handleCLick = () => {
    setIsOpen(!isOpen)
  }
  return <div>
    <span onClick={handleCLick}>
      <i className="blue folder icon"></i>
      <i class={`caret ${arrowDir} icon`}></i>
      {name}</span>
    <div style={{ marginLeft: '20px' }}>
      {isOpen ? children : null}
    </div>

  </div >
};

const File = (props) => {
  return <div> {props.name}</div>
};

export default App;
