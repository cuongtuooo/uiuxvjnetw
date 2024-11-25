import React, { useState, useEffect } from "react";
import { getNewss, createNews, updateNews, deleteNews } from "../../Api/NewsApi";

const NewsManagement: React.FC = () => {
    const [news, setNews] = useState<{ id: number; title: string; content: string }[]>([]);
    const [formState, setFormState] = useState<{ id?: number; title: string; content: string }>({
        title: "",
        content: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch news when the component mounts
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNewss();
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing) {
                if (formState.id) {
                    const updatedNews = await updateNews(formState.id, formState.title, formState.content);
                    setNews((prev) =>
                        prev.map((item) => (item.id === formState.id ? updatedNews : item))
                    );
                }
            } else {
                const newNews = await createNews(formState.title, formState.content);
                setNews((prev) => [...prev, newNews]); // Thêm tin tức mới vào state mà không cần tải lại trang
            }
            resetForm();
        } catch (error) {
            console.error("Error adding/updating news:", error);
        }
    };

    const handleEdit = (id: number) => {
        const newsToEdit = news.find((item) => item.id === id);
        if (newsToEdit) {
            setFormState(newsToEdit);
            setIsEditing(true);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteNews(id);
            setNews((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    const resetForm = () => {
        setFormState({ title: "", content: "" });
        setIsEditing(false);
    };

    return (
        <div>
            <h2>News Management</h2>

            <form className="form__product" onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formState.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={formState.content}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? "Update News" : "Add News"}</button>
                {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((newsItem) => (
                        <tr key={newsItem.id}>
                            <td>{newsItem.title}</td>
                            <td>{newsItem.content}</td>
                            <td>
                                <button onClick={() => handleEdit(newsItem.id)}>Edit</button>
                                <button onClick={() => handleDelete(newsItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsManagement;
