import React, { useEffect, useState } from "react";
import "./HexGenerator.scss";
import inputs from "./inputs";
import Input from "./Input";

const initialState = {
  width: 200,
  color: "#f1f500",
  border: false,
  border_color: "#000000",
  border_width: 4,
  shadow: false,
  shadow_right: 5,
  shadow_down: 5,
  shadow_blur: 5,
  shadow_opacity: 0.5,
  shadow_color: "#000000",
  shadow_rgba: "rgba(0,0,0,0.5)",
};
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

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export default function HexGenerator() {
  const [state, setState] = useState(initialState);
  const [style, setStyle] = useState(initialStyle);
  const [styleWrap, setStyleWrap] = useState(initialStyleWrap);
  const [styleBefore, setStyleBefore] = useState(initialStyleBefore);
  const [RGBa, setRGBa] = useState(hexToRGB(state.shadow_color, state.shadow_opacity));

  useEffect(() => {
    let color = state.border? state.border_color : state.color;
    let width = state.border? state.border_width : 0;
    setRGBa(hexToRGB(state.shadow_color, state.shadow_opacity));

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
    if(state.shadow){
    setStyleWrap({
      filter: `webkit-drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa})`,
      filter: `drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa})`,
    });}else{
      setStyleWrap({
      })
    }
    return () => {};
  }, [state]);

  const handleChange = (e) => {

     if(e.target.type === 'checkbox'){
       // if its checkbox we toggle true/false
      setState({...state, [e.target.name]: !state[e.target.name] })
    } else if (isNaN(parseInt(e.target.value))) {
      // if its not a number (in this case its color bu could be more text fields for eg)
      setState({ ...state, [e.target.name]: e.target.value });
    } else if (e.target.type === "range") {
      // if its range input (we can change  + and - values)
      setState({ ...state, [e.target.name]: e.target.value });
    } else if (parseInt(e.target.value) < 0) {
      // for rest numbers - this case diameters - this cant be <0 so just return
      return;
    } else {
      // and if numbers is > 0 change.
      setState({ ...state, [e.target.name]: parseInt(e.target.value) });
    }
  };

  return (
    <div>
      {inputs.map((el, i) => (
        <Input key={i} data={el} handleChange={handleChange} state={state} />
      ))}

      <div className="box">
        <div className="hex-box">
          <div style={styleWrap}>
            <div style={style} id="hex">
              <div style={styleBefore}></div>
            </div>
          </div>
        </div>

        <div className="code-box">
          <div>HTML:</div>
          <div>
            {state.shadow ?
            <pre>{`<div class='hexagon-wrap'>
    <div class='hexagon'></div>
</div>`}</pre> :
            <pre>{`<div class='hexagon'></div>`}</pre>}
          </div>
          <div>CSS :</div>
          <div>

            <pre>
              {`.hexagon {
position: relative;
height: ${style.width};
width: ${style.width};
background: ${state.border_color};
}

.hexagon, .hexagon:before {
-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}`}
{state.border? <pre>{`
.hexagon:before {
position: absolute;
content: '';
top: ${styleBefore.top};
left: ${styleBefore.left};
height: calc(100% - ${2 * styleBefore.top.slice(0, (styleBefore.top).length -2)}px);
width: calc(100% - ${2 * styleBefore.top.slice(0, (styleBefore.top).length -2)}px);
background: ${state.color};
}
`}</pre> :
<pre>{`
.hexagon:before {
position: absolute;
content: '';
height: 100%;
width: 100%;
background: ${state.color};
}
`}</pre>}

{state.shadow ? <pre>{`
.hexagon-wrap {
filter: -webkit-drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa});
filter: drop-shadow(${state.shadow_right}px ${state.shadow_down}px ${state.shadow_blur}px ${RGBa});
}`}</pre> : ''}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
