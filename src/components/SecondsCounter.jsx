import React from 'react';
import '../styles/SecondsCounter.css';
 
export function SecondsCounter(props) {
   
    const seconds = props.seconds.toString().padStart(6, '0').split('');
    
    return (
        <div className="seconds-counter">
           
            <div className="counter-icon">
                <i className="far fa-clock"></i>
            </div>
            
            {seconds.map((digit, index) => (
                <div key={index} className="digit-card">
                    {digit}
                </div>
            ))}
        </div>
    );
}
