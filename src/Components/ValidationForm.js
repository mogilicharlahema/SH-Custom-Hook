function validateForm(values = {}) {
    let errors = {};

    // Firstname validation
    if (!values.firstname?.trim()) {
        errors.firstname = 'First Name is required';
    }

    // Lastname validation
    if (!values.lastname?.trim()) {
        errors.lastname = 'Last Name is required';
    }

    // Email validation
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // Mobile number validation
    if (!values.phNumber) {
        errors.phNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.phNumber)) {
        errors.phNumber = "Mobile number is invalid";
    }

    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    } else if (!/\d/.test(values.password)) {
        errors.password = 'Password must contain at least one number';
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[@$!%*?^&#]/.test(values.password)) {
        errors.password = 'Password must contain at least one special character';
    }

    return errors;
}

export default validateForm;
