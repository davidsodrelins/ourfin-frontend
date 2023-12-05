import React, { useState } from 'react';
import { FormContainer, ErrorMessage, Button } from '../styles/GlobalStyles';
import { User } from '../models/UserModel';
import { validateEmail, validatePassword } from '../utils/validation';
import Spinner from './Spinner';
import InputField from './InputField';
import userService from '../services/userService';
import { useMessage } from '../contexts/MessageContext';


const RegisterForm: React.FC = () => {
  const [userDetails, setUserDetails] = useState<User>({
    email: '',
    cpf: '',
    password: '',
    name: '',
    login: '',
    status: 'Active'
  });
  const [errors, setErrors] = useState<Partial<User>>({});
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const { showMessage } = useMessage();

  const saveUser = async (userDetails: User): Promise<void> => {
    try {
      await userService.createUser(userDetails, showMessage)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro ao tentar cadastrar.';
      showMessage(errorMessage, 'error');
    } finally {
      setIsRegistering(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
      validateField(name, value);
    } else {
      setUserDetails(prevState => ({ ...prevState, [name]: value }));
      validateField(name as keyof User, value);
    }
  };

  const validateField = (name: keyof User | 'confirmPassword', value: string) => {

    let errorMsg = '';
    switch (name) {
      case 'email':
        errorMsg = validateEmail(value) ? '' : 'Email inválido.';
        break;
      case 'password':
        errorMsg = validatePassword(value) ? '' : 'Senha inválida.';
        break;
      case 'confirmPassword':
        errorMsg = value === userDetails.password ? '' : 'Senhas não correspondem.';
        break;
      case 'name':
        errorMsg = value.trim() ? '' : 'Nome completo é obrigatório.';
        break;
      case 'cpf':
        errorMsg = value.trim() ? '' : 'CPF é obrigatório.';
        break;
      case 'login':
        errorMsg = value.trim() ? '' : 'Login é obrigatório.';
        break;
      default:
        break;
    }
    setErrors(prevState => ({ ...prevState, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRegistering(true);

    // Validação de todos os campos
    Object.keys(userDetails).forEach(key => {
      const value = userDetails[key as keyof User];
      if (typeof value === 'string') {
        validateField(key as keyof User, value);
      }
    });
    validateField('confirmPassword', confirmPassword);

    if (Object.values(errors).some(errorMsg => errorMsg)) {
      setIsRegistering(false);
      return;
    }


    try {
      await saveUser(userDetails);
      console.log('Usuário registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }

    setIsRegistering(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="name"
        type="text"
        label="Nome Completo"
        value={userDetails.name}
        onChange={handleInputChange}
      />
      <InputField
        name="cpf"
        type="text"
        label="CPF"
        value={userDetails.cpf}
        onChange={handleInputChange}
      />
      <InputField
        name="login"
        type="text"
        label="Login"
        value={userDetails.login}
        onChange={handleInputChange}
      />
      <InputField
        name="email"
        type="email"
        label="Email"
        value={userDetails.email}
        onChange={handleInputChange}
      />
      <InputField
        name="password"
        type="password"
        label="Senha"
        value={userDetails.password}
        onChange={handleInputChange}
      />
      <InputField
        name="confirmPassword"
        type="password"
        label="Confirmar Senha"
        value={confirmPassword}
        onChange={handleInputChange}
      />
      {Object.keys(errors).map(key =>
        errors[key as keyof User] &&
        <ErrorMessage key={key}>{errors[key as keyof User]}</ErrorMessage>
      )}
      <Button type="submit" disabled={isRegistering}>
        {isRegistering ? <><Spinner /> Registrando...</> : 'Registrar'}
      </Button>
    </FormContainer>
  );
};

export default RegisterForm;
