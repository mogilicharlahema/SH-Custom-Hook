import { useState } from 'react';
import Swal from 'sweetalert2';

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the form
        const formErrors = validate(values);
        setErrors(formErrors);

        // Check if there are any errors
        if (Object.keys(formErrors).length > 0) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all fields correctly!',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return; // Exit if there are errors
        }

        setIsSubmitted(true);
        Swal.fire({
            title: 'Success!',
            text: 'Form submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            resetForm(); // Reset the form after successful submission
        });

        setIsSubmitting(false);
    };

    const resetForm = () => {
        setValues(initialState);
        setErrors({});
        setIsSubmitted(false);
    };

    return { handleChange, handleSubmit, values, errors, isSubmitting, isSubmitted, resetForm };
};

export default useFormValidation;
