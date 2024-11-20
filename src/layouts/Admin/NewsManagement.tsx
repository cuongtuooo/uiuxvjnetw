import React, { useState } from "react";

const NewsManagement: React.FC = () => {
    const [news, setNews] = useState<{ title: string; content: string }[]>([
        { title: "News 1", content: "Content for news 1" },
        { title: "News 2", content: "Content for news 2" },
    ]);

    const handleDelete = (title: string) => {
        setNews(news.filter((item) => item.title !== title));
    };

    return (
        <div>
            <h2>News Management</h2>
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
