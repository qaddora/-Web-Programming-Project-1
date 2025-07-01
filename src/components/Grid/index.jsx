import React from 'react'
import "./styles.css"
const Grid = ({ left, right }) => {
  return (
    <div className="grid-container">
      <div className="grid-left">
        {left}
      </div>
      <div className="grid-right">
        {right}
      </div>
    </div>
  )
}

export default Grid