import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export const getNewss = async () => {
    const response = await api.get('/news');
    return response.data;
};

export const createNews = async (title: string, content: string) => {
    const response = await api.post('/news', { title,content});
    return response.data;
};

export const updateNews = async (id: number, title: string, content: string) => {
    const response = await api.put(`/news/${id}`, { title,content });
    return response.data;
};

export const deleteNews = async (id: number) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
};
