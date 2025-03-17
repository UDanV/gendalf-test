import React from "react";

export interface IButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'green' | 'whiteBlue' | 'whiteGreen' | 'blue' | 'transparentBlue';
    icon?: string;
}