import React from 'react';
import styled from 'styled-components';



export default function SmallHex({el}) {
    console.log(el);

const Hex = styled.div`
    &:before {
    background-image: url(${el.img})
  },`


    return (
        <Hex className='hexagon small-hex'><div>{el.text}</div></Hex>
    )
}
