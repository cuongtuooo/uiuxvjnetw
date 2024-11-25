import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export const getTaiKhoans = async () => {
    const response = await api.get('/tai-khoan');
    return response.data;
};

export const createTaiKhoan = async (email: string, role: string) => {
    const response = await api.post('/tai-khoan', { email,role});
    return response.data;
};

export const updateTaiKhoan = async (id: number, email: string, role: string) => {
    const response = await api.put(`/tai-khoan/${id}`, { email,role });
    return response.data;
};

export const deleteTaiKhoan = async (id: number) => {
    const response = await api.delete(`/tai-khoan/${id}`);
    return response.data;
};
