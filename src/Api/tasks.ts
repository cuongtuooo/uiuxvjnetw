import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export const getTasks = async () => {
    const response = await api.get('/tasks');
    return response.data;
};

export const createTask = async (name: string) => {
    const response = await api.post('/tasks', { name });
    return response.data;
};

export const updateTask = async (id: number, name: string) => {
    const response = await api.put(`/tasks/${id}`, { name });
    return response.data;
};

export const deleteTask = async (id: number) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
};
