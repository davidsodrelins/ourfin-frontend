import axios from 'axios';
import { API_URL, API_VERSION, AUTH_ENDPOINT } from '../config';
import { LoginUserData } from '../models/UserModel';

interface LoginCredentials {
    login?: string;
    email?: string;
    password: string;
}

const authService = {
    login: async (credentials: LoginCredentials, showMessage: (msg: string, type?: 'info' | 'alert' | 'error' | 'default') => void): Promise<LoginUserData> => {
        const source = axios.CancelToken.source();
        const timeout = 10000; // Timeout de 10 segundos

        const timeoutId = setTimeout(() => {
            source.cancel(`O login excedeu o tempo limite de ${timeout / 1000} segundos.`);
        }, timeout);

        try {
            const url = `${API_URL}${API_VERSION}${AUTH_ENDPOINT}`;
            const response = await axios.post<LoginUserData>(url, credentials, { cancelToken: source.token });
            clearTimeout(timeoutId); // Limpa o timeout se a requisição for bem sucedida
            showMessage(`Olá ${response.data.user.name}, é muito bom te ver novamente!`, 'default');
            return response.data;
        } catch (error) {
            clearTimeout(timeoutId); // Limpa o timeout se ocorrer um erro
            if (axios.isCancel(error)) {
                showMessage(error.message ?? 'Login cancelado', 'error');
                throw new Error(error.message ?? 'Login cancelado');
            } else if (axios.isAxiosError(error)) {
                const errorMessage = error.response ? error.response.data.message || 'Erro de autenticação' : 'Erro ao conectar ao servidor.';
                showMessage(errorMessage, 'error');
                throw new Error(errorMessage);
            } else {
                console.error("Erro inesperado:", error);
                showMessage('Ocorreu um erro inesperado.', 'error');
                throw error;
            }
        }
    }
};

export default authService;
