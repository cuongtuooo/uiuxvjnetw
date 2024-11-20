import React, { useState } from "react";

const NewsManagement: React.FC = () => {
    // State quản lý danh sách tin tức
    const [news, setNews] = useState<{ title: string; content: string }[]>([
        { title: "News 1", content: "Content for news 1" },
        { title: "News 2", content: "Content for news 2" },
    ]);

    // State quản lý form
    const [formState, setFormState] = useState<{ title: string; content: string }>({
        title: "",
        content: "",
    });

    // State xác định chế độ chỉnh sửa
    const [isEditing, setIsEditing] = useState(false);

    // Xử lý thay đổi trong form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    // Xử lý thêm hoặc chỉnh sửa tin tức
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setNews((prev) =>
                prev.map((item) =>
                    item.title === formState.title ? { ...formState } : item
                )
            );
        } else {
            setNews((prev) => [...prev, { ...formState }]);
        }
        resetForm();
    };

    // Xử lý chỉnh sửa tin tức
    const handleEdit = (title: string) => {
        const newsToEdit = news.find((item) => item.title === title);
        if (newsToEdit) {
            setFormState(newsToEdit);
            setIsEditing(true);
        }
    };

    // Xử lý xóa tin tức
    const handleDelete = (title: string) => {
        setNews(news.filter((item) => item.title !== title));
    };

    // Reset form về trạng thái mặc định
    const resetForm = () => {
        setFormState({ title: "", content: "" });
        setIsEditing(false);
    };

    return (
        <div>
            <h2>News Management</h2>

            {/* Form thêm hoặc chỉnh sửa tin tức */}
            <form className="form__product" onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formState.title}
                        onChange={handleInputChange}
                        required
                        // disabled={isEditing} // Không cho phép sửa title khi chỉnh sửa
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

            {/* Danh sách tin tức */}
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
                        <tr key={newsItem.title}>
                            <td>{newsItem.title}</td>
                            <td>{newsItem.content}</td>
                            <td>
                                <button onClick={() => handleEdit(newsItem.title)}>Edit</button>
                                <button onClick={() => handleDelete(newsItem.title)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsManagement;
