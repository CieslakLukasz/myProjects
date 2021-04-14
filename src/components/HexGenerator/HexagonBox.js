import React from 'react'

export default function HexagonBox({style, styleWrap, styleBefore}) {
    return (
        <div className="box">
          <div style={styleWrap}>
            <div style={style} id="hex">
              <div style={styleBefore}></div>
            </div>
          </div>
        </div>
    )
}
