import React, { useState, useEffect } from 'react'

export default function Input({data, handleChange, state}) {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if((typeof(state[data.about]) === 'boolean') && !(state[data.about]) && !(data.type ==='checkbox')){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
        return
    }, [state])

    return (
        <div className='group'>
        <label for={data.name}>{data.text}
        {data.type ==='range'?
        <div className='flex'><input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        value={state[data.name.replace(/^"(.+(?="$))"$/, '$1')]}
        onChange={handleChange}
        min={data.min}
        max={data.max}
        step={data.step}
        id={data.name}
        disabled={disabled}
        ></input>
        <output>
        <input
        data-about={data.about}
        type='number'
        name={data.name}
        value={state[data.name.replace(/^"(.+(?="$))"$/, '$1')]}
        onChange={handleChange}
        min={data.min}
        max={data.max}
        step={data.step}
        disabled={disabled}
        ></input></output>
        </div>
              :        <input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        value={state[data.name.replace(/^"(.+(?="$))"$/, '$1')]}
        onChange={handleChange}
        id={data.name}
        disabled={disabled}
        ></input>

        }
        </label>
        </div>
    )
}
