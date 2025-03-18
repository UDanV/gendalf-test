import React, {useState, ChangeEvent} from 'react';
import '../sass/components/_input.scss';
import {InputFieldProps} from "../types/input";
import { IMaskInput } from 'react-imask';
import {validateInput} from "../utils/validation";

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

    const handleChange = (
        valueOrEvent:
            | string
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (typeof valueOrEvent === 'string') {
            onChange(valueOrEvent);
        } else {
            onChange(valueOrEvent.target.value);
        }
    };

    const handleBlur = () => {
        setTouched(true);
    };

    const validationResult = validateInput(type, value, required);
    const isValid = touched && validationResult;
    const isError = touched && !validationResult;

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
                        {options?.map((option) => (
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
                ) : type === 'tel' ? (
                    <IMaskInput
                        mask="+7 (000) 000-00-00"
                        value={value}
                        onAccept={(value) => handleChange(value)}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={`input ${isError ? 'input-error' : isValid ? 'input-correct' : ''}`}
                    />
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
                    <img src={iconCorrect} alt="Correct" className="input-icon correct-icon"/>
                )}

                {isError && iconError && (
                    <img src={iconError} alt="Error" className="input-icon error-icon"/>
                )}
            </div>
        </div>
    );
};

export default InputField;
