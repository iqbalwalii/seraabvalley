export default function validateLogin(values) {
    let errors = {};
    // Email errors
    if (!values.email) {
        errors.email = `Email can't be empty`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = `Invalid email address`;
    }
    // Password errors
    if (!values.password) {
        errors.password = `Password can't be empty`;
        console.log('password', 'empty');
    } else if (values.password.length < 6) {
        errors.password = `Password must be at least 6 chars`;
        console.log('length');
    }

    return errors;
}
