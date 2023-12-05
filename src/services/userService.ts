import axios from "axios";
import { API_URL, API_VERSION, CREATE_USER_ENDPOINT } from "../config";
import { User, CreateUserResponse } from "../models/UserModel";


const userService = {
    createUser: async (payload: User, showMessage: (msg: string, type?: 'info' | 'alert' | 'error' | 'default') => void): Promise<CreateUserResponse> => {
        const source = axios.CancelToken.source();
        const timeout = 10000; // Timeout de 10 segundos

        const timeoutId = setTimeout(() => {
            source.cancel(`A criação do usuário excedeu o tempo limite de ${timeout / 1000} segundos.`);
        }, timeout);

        try {
            const url = `${API_URL}${API_VERSION}${CREATE_USER_ENDPOINT}`;
            const response = await axios.post<CreateUserResponse>(url, payload, { cancelToken: source.token });
            clearTimeout(timeoutId); // Limpa o timeout se a requisição for bem sucedida
            showMessage(`Seu cadastro foi realizado com sucesso!`);
            return response.data;
        } catch (error) {
            clearTimeout(timeoutId); // Limpa o timeout se ocorrer um erro
            if (axios.isCancel(error)) {
                showMessage(error.message ?? 'Criação do usuário cancelada', 'error');
                throw new Error(error.message ?? 'Criação do usuário cancelada');
            } else if (axios.isAxiosError(error)) {
                const errorMessage = error.response ? error.response.data.message || ('Erro ao criar usuário' + error.response.data.message) : 'Erro ao conectar ao servidor.';
                showMessage(error.message, 'error');
                throw new Error(errorMessage);
            } else {
                console.error("Erro inesperado:", error);
                showMessage('Ocorreu um erro inesperado.', 'error');
                throw error;
            }
        }
    }
};

export default userService;