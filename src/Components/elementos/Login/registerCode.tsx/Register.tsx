'use client'
import { useState } from 'react';
import { RegisterForm, RegisterFormErrors } from '../../Interfaces/LoginReg';
import { ValidateRegister } from './ValidateRegister';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/services/services';
import Swal from 'sweetalert2';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState<RegisterFormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: ""
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    const newErrors = ValidateRegister({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = ValidateRegister(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = await registerUser(formData);
        setSuccessMessage("¡Registro exitoso!");
        setErrorMessage("");
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Inicie sesión con su nueva cuenta',
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/User/login");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          phone: ""
        });
      } catch (error: any) {
        if (error instanceof Error) {
          if (error.message === 'Email already registered') {
            setErrorMessage('Email already registered.');
          } else {
            setErrorMessage('Ocurrió un error durante el registro. Por favor, inténtelo de nuevo.');
          }
        }
      }
    }
  };

  return (
    <div className="text-black flex flex-col max-w-md mx-auto bg-white p-8 rounded-lg shadow-md ml-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4 mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
              Nombre
            </label>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="relative w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
              Email
            </label>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="relative mb-4 w-1/2">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
              Teléfono
            </label>
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <div className="relative mb-4 w-1/2">
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="address" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
              Dirección
            </label>
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
            Contraseña
          </label>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" "
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword" className="absolute left-2 -top-2 text-gray-500 bg-white px-1 transition-transform transform -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-3 peer-focus:scale-75">
            Confirmar Contraseña
          </label>
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Enviar
        </button>
      </form>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Register;
