import React, { useState, ChangeEvent } from 'react';
import '../sass/components/_input.scss';

interface InputFieldProps {
    label?: string;
    type?: 'text' | 'email' | 'tel' | 'textarea' | 'radio';
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    placeholder?: string;
    options?: string[];
    rows?: number;
    iconCorrect?: string;
    iconError?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   type = 'text',
                                                   value,
                                                   onChange,
                                                   required = false,
                                                   placeholder = '',
                                                   options = [],
                                                   rows = 3,
                                                   iconCorrect,
                                                   iconError,
                                               }) => {
    const [touched, setTouched] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    const handleBlur = () => {
        setTouched(true);
    };

    const validateInput = () => {
        if (required && !value.trim()) {
            return false;
        }

        switch (type) {
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    return false;
                }
                break;
            case 'tel':
                if (!/^\+?[0-9]{10,15}$/.test(value)) {
                    return false;
                }
                break;
            case 'textarea':
                if (value.length < 10) {
                    return false;
                }
                break;
            case 'radio':
                if (!value) {
                    return false;
                }
                break;
            default:
                break;
        }

        return true;
    };

    const isValid = touched && validateInput();
    const isError = touched && !validateInput();

    return (
        <div className="input-field">
            <label className="input-label">
                {label}
                {required}
            </label>

            <div className="input-container">
                {type === 'textarea' ? (
                    <textarea
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        rows={rows}
                        className={`input ${isError ? 'input-error' : isValid ? 'input-correct' : ''}`}
                    />
                ) : type === 'radio' ? (
                    <div className="radio-group">
                        {options.map((option) => (
                            <label key={option} className="radio-label">
                                <input
                                    type="radio"
                                    name={label}
                                    value={option}
                                    checked={value === option}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={`input ${isError ? 'input-error' : isValid ? 'input-correct' : ''}`}
                    />
                )}

                {isValid && iconCorrect && (
                    <img src={iconCorrect} alt="Correct" className="input-icon correct-icon" />
                )}

                {isError && iconError && (
                    <img src={iconError} alt="Error" className="input-icon error-icon" />
                )}
            </div>
        </div>
    );
};

export default InputField;