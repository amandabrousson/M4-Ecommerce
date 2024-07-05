import { LoginForm, LoginFormErrors } from "../../Interfaces/LoginReg";

export function ValidateLogin(dataUser: LoginForm): LoginFormErrors {
    let errors: LoginFormErrors = {};

    if (!dataUser.email) {
        errors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(dataUser.email)) {
        errors.email = "Email is not valid or must end with .com";
    }
    

    if (!dataUser.password) {
        errors.password = "Password is required";
    } else if (dataUser.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return errors;
}

