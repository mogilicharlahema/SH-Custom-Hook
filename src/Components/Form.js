import React from 'react';
import validateForm from './ValidationForm'; // Ensure correct path
import useFormValidation from './useFormValidation'; // Ensure correct path
import "../Components/Form.css"; // Ensure this path is correct

const RegistrationForm = () => {
    const initialState = { firstname: '', lastname: '', email: '', password: '', phNumber: '' };
    const { handleChange, handleSubmit, values, errors, isSubmitting } = useFormValidation(initialState, validateForm);

    return (
        <>
            <h2>Registration Form</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            required
                            placeholder="Enter First Name"
                            value={values.firstname}
                            onChange={handleChange}
                        />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>

                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                            placeholder="Enter Last Name"
                            value={values.lastname}
                            onChange={handleChange}
                        />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="phNumber">Mobile Number</label>
                        <input
                            type="text" // Changed from number to text
                            id="phNumber"
                            name="phNumber"
                            required
                            placeholder="Enter Mobile Number"
                            value={values.phNumber}
                            onChange={handleChange}
                        />
                        {errors.phNumber && <p className="error">{errors.phNumber}</p>}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
