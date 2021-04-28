import React, { useState, useEffect } from "react";
import styled from "styled-components";


// making a div with styed before - pseudoelement. img gonna be change due to props img for every hex alone.
let Hex = styled.div`
&:before {
background-image: url(${props =>props.image})
},`;

export default function SmallHex({ el, i, index, handleBorderChange }) {
  const [image, setImage] = useState('');
  const [style, setStyle] = useState(`hexagon small-hex`);

  // making img visable when hex is clicked or hover
  useEffect(() => {
    if (el.hover) {
      setStyle(`hexagon small-hex onClick `);
      setImage(el.img);
    }else{
      setStyle(`hexagon small-hex`);
      setImage('')
    }
  }, [el]);

  // changing visablity of img and border color on clicked element
  const handleClick = () => {
    handleBorderChange(i);
  };

  // changing color of boder on mouseEnter and back on mauseOut
  const handleMouseEnter = () => {
    if (!el.hover) {
      setStyle("hexagon small-hex onHover");
      setImage(el.img);
    }
  };

  const handleMouseOut = () => {
    if (!el.hover) {
      setStyle("hexagon small-hex");
      setImage('');
    }
  };

  return (
    <Hex image={image}
      className={style}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <div>{el.text}</div>
    </Hex>
  );
}
