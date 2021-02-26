import { useEffect, useState } from 'react';

function useFormValidation(initialState, validate, authenticateUser) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        console.log('in useEffect');
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log('in noErrors');
                authenticateUser(values);
                setSubmitting(false);
            } else {
                console.log('in Errors');
                setSubmitting(false);
            }
        }
    }, [isSubmitting, authenticateUser]);

    const onBlurHandler = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    };

    const onChangeHandler = event => {
        console.log(event.target.value);
        event.persist();
        setValues(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    };
    return {
        values,
        isSubmitting,
        errors,
        onBlurHandler,
        onChangeHandler,
        onSubmitHandler,
    };
}

export default useFormValidation;
