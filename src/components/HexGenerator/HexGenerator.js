import React, { useEffect, useState } from "react";
import "./HexGenerator.scss";

import inputs from "./inputs";

import Input from "./Input";
import CodeBox from "./CodeBox";
import HexagonBox from "./HexagonBox";

const initialState = {
  width: 200,
  color: "#f1f500",
  border: true,
  border_color: "#000000",
  border_width: 4,
  shadow: true,
  shadow_right: 15,
  shadow_down: 15,
  shadow_blur: 5,
  shadow_opacity: 0.5,
  shadow_color: "#000000",
  shadow_rgba: "rgba(0,0,0,0.5)",
  bg_color: "#ffffff"
};
const initialStyleBackground = {
  backgroundColor: '#ffffff',
  padding: '15px',
  margin: '15px',
  borderRadius: '5%'
}
const initialStyleWrap = {
  filter: "webkit-drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
  filter: "drop-shadow(5px 5px 5px  rgba(0, 0, 0, 0.5))",
};
const initialStyle = {
  position: "relative",
  width: "200px",
  height: "200px",
  backgroundColor: "#000000",
  webkitClipPath:
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};
const initialStyleBefore = {
  position: "absolute",
  content: "",
  top: "2px",
  left: "2px",
  height: "calc(100% - 4px)",
  width: "calc(100% - 4px)",
  backgroundColor: "#f1f500",
  webkitClipPath:
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

//in some point we need to change hex from inpup.value and opacity to one lane, so we can use it in react style of shadow as rgba
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

export default function HexGenerator() {
  const [state, setState] = useState(initialState);
  const [styleBackground, setStyleBackground] = useState(initialStyleBackground);
  const [style, setStyle] = useState(initialStyle);
  const [styleWrap, setStyleWrap] = useState(initialStyleWrap);
  const [styleBefore, setStyleBefore] = useState(initialStyleBefore);
  const [RGBa, setRGBa] = useState(
    hexToRGB(state.shadow_color, state.shadow_opacity)
  );


  // after state change (when we change anything in inputs) we need to update all styles
  useEffect(() => {
    let color = state.border ? state.border_color : state.color;
    let width = state.border ? state.border_width : 0;
    setRGBa(hexToRGB(state.shadow_color, state.shadow_opacity));
    setStyleBackground({...styleBackground, backgroundColor: `${state.bg_color}`});
    setStyle({
      ...style,
      width: `${state.width}px`,
      height: `${state.width}px`,
      backgroundColor: `${color}`,
    });
    setStyleBefore({
      ...styleBefore,
      top: `${width}px`,
      left: `${width}px`,
      height: `calc(100% - 2* ${width}px)`,
      width: `calc(100% - 2* ${width}px)`,
      backgroundColor: `${state.color}`,
    });
    if (state.shadow) {
      setStyleWrap({
        filter: `webkit-drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa})`,
        filter: `drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa})`,
      });
    } else {
      setStyleWrap({});
    }
    return () => {};
  }, [state]);


  // becouse we generate inputs from array, we need condition in out handleChange :
  const handleChange = (e) => {
    const about = e.target.dataset.about;
    if (e.target.type === "checkbox") {
      // if its checkbox we toggle true/false
      setState({ ...state, [e.target.name]: !state[e.target.name] });
    } else if (e.target.type === "number") {
      //for numbers inputs - if its about shadow => it can be negative and we have to use parseFloat becouse opacity is decimal
      // else if its not shadow => so its border o width => it cant be negative, so we return on <0 or parseFloat value on positve numbers
      if ( about === "shadow") {
        setState({ ...state, [e.target.name]: parseFloat(e.target.value) });
      }else if (parseInt(e.target.value) < 0) {
          return;
        } else {
          setState({ ...state, [e.target.name]: parseFloat(e.target.value) });
        }
    } else {
      //for rest : colors / range
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="container">
      <div className="flex-col">
        <div className="input-box">
          {inputs.map((el, i) => (
            <Input
              key={i}
              data={el}
              handleChange={handleChange}
              state={state}
            />
          ))}
        </div>
        <HexagonBox
          style={style}
          styleWrap={styleWrap}
          styleBefore={styleBefore}
          styleBackground={styleBackground}

        />
      </div>
      <CodeBox
        style={style}
        styleBefore={styleBefore}
        state={state}
        RGBa={RGBa}
      />
    </div>
  );
}
