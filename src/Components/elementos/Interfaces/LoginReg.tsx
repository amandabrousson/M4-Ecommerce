export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginFormErrors {
    email?: string;
    password?: string;
}

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
}

export interface RegisterFormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
    phone?: string;
}