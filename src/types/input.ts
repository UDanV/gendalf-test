export interface InputFieldProps {
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