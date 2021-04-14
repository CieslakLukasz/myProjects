import React from 'react'

export default function CodeBox({style, styleBefore, state, RGBa}) {
    return (
        <div className="code-box">
          <div>HTML:</div>
          <div>
            {state.shadow ?
            <pre>{`<div class='hexagon-wrap'>
    <div class='hexagon'></div>
</div>`}</pre> :
            <pre>
            {`
<div class='hexagon'></div>
            `}</pre>}
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
    )
}
