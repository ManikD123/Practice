import React from 'react'

const TemperatureInput = ({temperature, setTemperature}) => {
  return (
    <div>
        <label>
            <input
        type="text"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        ></input>
        </label>
    </div>
  )
}

export default TemperatureInput
