import React from 'react';
import {CardProps} from "../types/card.ts";
import {Button} from "./button.tsx";

export const Card: React.FC<CardProps> = ({ imageUrl, description }) => {

    const handleClick = () => {
        alert("Что то произошло")

}
    return (
        <div className="card">
            <img src={imageUrl} alt="Пример фотографии" className="card-image" />
            <div className="card-content">
                <p className="card-text">
                    {description}
                </p>
                <div className="button-container">
                    <Button onClick={handleClick} variant="transparentBlue">Перейти к статье</Button>
                </div>
            </div>
        </div>
    );
};