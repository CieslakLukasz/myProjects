import React from 'react'

export default function HexagonBox({style, styleWrap, styleBefore, styleBackground}) {
    return (
        <div className="box" style={styleBackground}>
          <div style={styleWrap}>
            <div style={style} id="hex">
              <div style={styleBefore}></div>
            </div>
          </div>
        </div>
    )
}
