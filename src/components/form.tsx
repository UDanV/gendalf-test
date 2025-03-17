import React, { useState, ChangeEvent } from 'react';
import '../sass/components/_input.scss';
import {Button} from './button';
import InputField from "./input.tsx";

const FormComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Форма отправлена', { name, phone, email, position, experience, message, files });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <InputField
                type="text"
                value={name}
                onChange={setName}
                required
                placeholder="Введите ваше имя"
            />
            <InputField
                type="tel"
                value={phone}
                onChange={setPhone}
                required
                placeholder="Введите ваш телефон"
            />
            <InputField
                type="email"
                value={email}
                onChange={setEmail}
                required
                placeholder="Введите ваш email"
            />
            <InputField
                type="text"
                value={position}
                onChange={setPosition}
                placeholder="Введите желаемую должность"
            />
            <div className="input-field">
                <label>Выберите категорию занятости</label>
                <div className="radio-group">
                    {['Работа в офисе', 'Стажировка', 'Удаленная работа'].map((option) => (
                        <label key={option} className="radio-label">
                            <input
                                type="radio"
                                name="experience"
                                value={option}
                                checked={experience === option}
                                onChange={(e) => setExperience(e.target.value)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <InputField
                type="textarea"
                value={message}
                onChange={setMessage}
                required
                placeholder="Введите ваши вопросы"
                rows={5}
            />

            <div className="btnContainer">
                <Button onClick={handleFileChange} variant="whiteGreen">
                    <label htmlFor="resume-upload">Прикрепить резюме</label>
                </Button>
                <Button variant="green">Записаться</Button>
                <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    style={{ display: 'none' }}
                    multiple
                />
            </div>

            {files.length > 0 && (
                <div className="attached-files">
                    <h3>Прикрепленные файлы:</h3>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                                <span>{file.name}</span>
                                <button onClick={() => handleRemoveFile(index)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
};

export default FormComponent;