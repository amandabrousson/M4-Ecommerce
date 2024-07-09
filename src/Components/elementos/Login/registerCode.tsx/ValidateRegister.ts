import { RegisterForm, RegisterFormErrors } from "../../Interfaces/LoginReg"; 

export function ValidateRegister(formData: RegisterForm): RegisterFormErrors {
    let errors: RegisterFormErrors = {};

    if (!formData.name) {
        errors.name = "Name is required";
    }

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        errors.email = "Email must have @ and .com";
    } 

    if (!formData.phone) {
        errors.phone = "Phone is required";
    } else if (!/^\d{8,}$/.test(formData.phone)) {
        errors.phone = "Phone number must have at least 8 digits";
    }

    if (!formData.address) {
        errors.address = "Address is required";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) { 
        errors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}
