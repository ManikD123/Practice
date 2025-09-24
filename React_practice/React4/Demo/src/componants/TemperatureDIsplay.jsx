import React from 'react'

const TemperatureDIsplay = ({temperature}) => {

    const farenhite = (temperature * 9) / 5 + 32;
  return (
    <div>
      <p>Temperature in celcius: {temperature}</p>
      <p>Temperature in Farenhite: {farenhite}</p>
    </div>
  )
}

export default TemperatureDIsplay
