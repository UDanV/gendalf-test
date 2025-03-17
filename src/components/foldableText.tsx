import React, { useState } from 'react';
import '../sass/components/_foldable.scss';

interface FoldableProps {
    title: string;
    content: React.ReactNode;
    iconOpen: React.ReactNode;
    iconClosed: React.ReactNode;
}

const Foldable: React.FC<FoldableProps> = ({ title, content, iconOpen, iconClosed }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="foldable">
            <div className="foldable-header" onClick={toggleContent}>
                <span className="foldable-icon-wrapper">
                  {isOpen ? iconOpen : iconClosed}
                </span>
                <span className={`foldable-title ${isOpen ? 'open' : ''}`}>{title}</span>
            </div>
            <div className={`foldable-content ${isOpen ? 'open' : ''}`}>
                <div className="foldable-content-inner">{content}</div>
            </div>
        </div>
    );
};

export default Foldable;