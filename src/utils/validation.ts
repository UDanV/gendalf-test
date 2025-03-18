export const validateInput = (type: string, value: string, required: boolean): boolean => {
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
            if (!/^\+?[0-9\s\-()]{10,20}$/.test(value.trim())) {
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