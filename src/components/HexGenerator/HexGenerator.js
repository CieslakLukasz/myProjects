import React, { useEffect, useState } from "react";
import "./HexGenerator.scss";

export default function HexGenerator() {
  const [state, setState] = useState({
    width: 200,
    color: "#e66465",
    border: "#f00000",
    border_width: 2,
  });
  const [style, setStyle] = useState({
    position: "relative",
    width: "200px",
    height: "200px",
    backgroundColor: "##f00000",
    webkitClipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
  });
  const [styleBefore, setStyleBefore] = useState({
    position: "absolute",
    content: "",
    top: "2px",
    left: "2px",
    height: "calc(100% - 4px)",
    width: "calc(100% - 4px)",
    backgroundColor: "#e66465",
    webkitClipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
  });

  useEffect(() => {

    setStyle({...style,
      width: `${state.width}px`,
      height: `${state.width}px`,
      backgroundColor: `${state.border}`,
    });
    setStyleBefore({...styleBefore,
        top: `${state.border_width}px`,
        left:  `${state.border_width}px`,
        height: `calc(100% - 2* ${state.border_width}px)`,
        width: `calc(100% - 2* ${state.border_width}px)`,
        backgroundColor: `${state.color}`,
    })

    return () => {};
  }, [state]);

  const handleChange = (e) => {

      if(isNaN(parseInt(e.target.value))) {
        setState({ ...state, [e.target.name]: e.target.value });
      }else if(parseInt(e.target.value) < 0){
          console.log('mniejsze od 0');
          return;
      }else{
    setState({ ...state, [e.target.name]: parseInt(e.target.value) });
      }
  };

  return (
    <div>
      <label className="flex-row">
        {" "}
        Width (px) :
        <input
          className="input"
          type="number"
          placeholder="width"
          name="width"
          value={state.width}
          onChange={handleChange}
        />
      </label>
      <label className="flex-row">
        {" "}
        Hexagon color:
        <input
          type="color"
          value={state.color}
          onChange={handleChange}
          name="color"
        />
      </label>
      <label className="flex-row">
        {" "}
        Border (px) :
        <input
          type="number"
          placeholder="border width"
          value={state.border_width}
          name="border_width"
          onChange={handleChange}
        />
      </label>
      <label className="flex-row">
        {" "}
        Border color:
        <input
          type="color"
          value={state.border}
          onChange={handleChange}
          name="border"
        />
      </label>

      <div className="box">
        <div className="hex-box">
        <div><div style={style} id='hex'>
            <div style={styleBefore}></div></div>

          </div>

        </div>

        <div className="code-box">
          <div>HTML:</div>
          <div>
            <pre>{`<div class='hexagon'></div>`}</pre>
          </div>
          <div>CSS :</div>
          <div>
            <pre>{`
            .hexagon {
                position: relative;
                height: ${style.width};
                width: ${style.width};
                background: ${state.border};
              }
              .hexagon:before {
                position: absolute;
                content: '';
                top: ${state.border_width}px;
                left: ${state.border_width}px;
                height: calc(100% - ${2* state.border_width}px);
                width: calc(100% - ${2* state.border_width}px);
                background: ${style.backgroundColor};
              }
              .hexagon, .hexagon:before {
                -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
              }
            `}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
