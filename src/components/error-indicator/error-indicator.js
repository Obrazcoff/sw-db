import React from 'react'

import './error-indicator.css'
import icon from './Death-Star-2nd-icon.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
        <img src={icon} alt="error icon" />
            <sapn className="boom">BOOM!</sapn>
            <span>
                something has gone wrong
            </span>
            <span>
                (but droids already working on it to fix)
            </span>
        </div>
    )
}

export default ErrorIndicator;