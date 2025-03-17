import React from 'react';
import {IButtonProps} from "../types/button.ts";

export const Button: React.FC<IButtonProps> = ({ onClick, children, variant = 'green', icon }) => {
    return (
        <button className={`custom-button ${variant}`} onClick={onClick}>
            {children}
            {icon && <img src={icon} alt="icon" className="button-icon" />}
        </button>
    );
};