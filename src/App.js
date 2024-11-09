import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [buttonPressed, setButtonPressed] = React.useState({
    key: null,
    number: null
  });

  useEffect(() => {
    const onClickAnyButton = (event) => {
      setButtonPressed({
        key: event.key,
        number: event.keyCode
      });
    }

    window.addEventListener('keydown', onClickAnyButton);

    return () => {
      window.removeEventListener('keydown', onClickAnyButton);
    }
  }, []);
  

  return (
    <div className="App">
      <div className="container">
        {!buttonPressed.key && <div className="title">Press any key</div>}
        {buttonPressed.key &&
          <div className="main-content">
            <div className="button">{buttonPressed.number}</div>
            <div className="name">{buttonPressed.key}</div>
            <div className="text">
              <p className="key"><b>Key:</b> {buttonPressed.key}</p>
              <div className="divider"></div>
              <p className="code"><b>Code:</b> {buttonPressed.number}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;