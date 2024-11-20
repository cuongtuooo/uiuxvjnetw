import React, { useState } from "react";

const AccountManagement: React.FC = () => {
    // State lưu danh sách tài khoản
    const [accounts, setAccounts] = useState<{ email: string; role: string }[]>([
        { email: "user1@example.com", role: "Admin" },
        { email: "user2@example.com", role: "User" },
    ]);

    // State quản lý form
    const [formState, setFormState] = useState<{ email: string; role: string }>({
        email: "",
        role: "User",
    });

    // State xác định xem có đang chỉnh sửa hay không
    const [isEditing, setIsEditing] = useState(false);

    // Xử lý thay đổi trong form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    // Xử lý thêm hoặc chỉnh sửa tài khoản
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setAccounts((prev) =>
                prev.map((account) =>
                    account.email === formState.email ? { ...formState } : account
                )
            );
        } else {
            setAccounts((prev) => [...prev, { ...formState }]);
        }
        resetForm();
    };

    // Xử lý khi click nút chỉnh sửa
    const handleEdit = (email: string) => {
        const accountToEdit = accounts.find((account) => account.email === email);
        if (accountToEdit) {
            setFormState(accountToEdit);
            setIsEditing(true);
        }
    };

    // Xử lý khi click nút xóa
    const handleDelete = (email: string) => {
        setAccounts(accounts.filter((account) => account.email !== email));
    };

    // Reset form về trạng thái mặc định
    const resetForm = () => {
        setFormState({ email: "", role: "User" });
        setIsEditing(false);
    };

    return (
        <div>
            <h2>Account Management</h2>

            {/* Form thêm hoặc chỉnh sửa tài khoản */}
            <form className="form__product" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        // disabled={isEditing} // Không cho phép sửa email khi chỉnh sửa
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        name="role"
                        value={formState.role}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <button type="submit">{isEditing ? "Update Account" : "Add Account"}</button>
                {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>

            {/* Bảng danh sách tài khoản */}
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.email}>
                            <td>{account.email}</td>
                            <td>{account.role}</td>
                            <td>
                                <button onClick={() => handleEdit(account.email)}>Edit</button>
                                <button onClick={() => handleDelete(account.email)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountManagement;
