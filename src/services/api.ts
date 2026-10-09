import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://localhost:7257/api/",
    timeout: 15000,
    headers: {
        Accept: "application/json"
    }
})


axiosInstance.interceptors.request.use(
    (config) => {
        // Busca o token salvo no navegador (Ajuste o nome 'token' se usou outra chave)
        const token = localStorage.getItem("token"); 

        if (token) {
            // Adiciona o cabeçalho Bearer que a sua API C# espera
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);