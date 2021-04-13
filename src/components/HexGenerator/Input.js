import React from 'react'

export default function Input({data, handleChange, state}) {

    return (
        <label>{data.text}
        {data.type ==='range'?
        <input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        value={state[data.name.replace(/^"(.+(?="$))"$/, '$1')]}
        onChange={handleChange}
        min={data.min}
        max={data.max}
        step={data.step}
        ></input>
        :
        <input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        value={state[data.name.replace(/^"(.+(?="$))"$/, '$1')]}
        onChange={handleChange}
        ></input>
        }
        </label>
    )
}
