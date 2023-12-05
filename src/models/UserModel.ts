// src/models/UserModel.ts
export interface User {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    login: string;
    status: string;
    password: string;
}

export interface LoginUserData {
    message: string;
    token: string;
    user: User;
}

export interface CreateUserResponse {
    message: string;
    userId: number;
}

