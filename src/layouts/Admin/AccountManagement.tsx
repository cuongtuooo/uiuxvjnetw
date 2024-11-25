import React, { useState, useEffect } from "react";
import { getTaiKhoans, createTaiKhoan, updateTaiKhoan, deleteTaiKhoan } from "../../Api/TaiKhoanApi";

type TaiKhoan = {
    id: number;
    email: string;
    role: string;
};

const AccountManagement: React.FC = () => {
    const [accounts, setAccounts] = useState<TaiKhoan[]>([]);
    const [formState, setFormState] = useState<{ id?: number; email: string; role: string }>({
        email: "",
        role: "User",
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch danh sách tài khoản từ API khi component được render
    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const data = await getTaiKhoans();
            setAccounts(data);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && formState.id) {
                // Gọi API cập nhật tài khoản
                await updateTaiKhoan(formState.id, formState.email, formState.role);
            } else {
                // Gọi API thêm tài khoản mới
                await createTaiKhoan(formState.email, formState.role);
            }
            // Refresh danh sách tài khoản
            fetchAccounts();
            resetForm();
        } catch (error) {
            console.error("Error saving account:", error);
        }
    };

    const handleEdit = (id: number) => {
        const accountToEdit = accounts.find((account) => account.id === id);
        if (accountToEdit) {
            setFormState(accountToEdit);
            setIsEditing(true);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            // Gọi API xóa tài khoản
            await deleteTaiKhoan(id);
            // Refresh danh sách tài khoản
            fetchAccounts();
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    };

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
                        <tr key={account.id}>
                            <td>{account.email}</td>
                            <td>{account.role}</td>
                            <td>
                                <button onClick={() => handleEdit(account.id)}>Edit</button>
                                <button onClick={() => handleDelete(account.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountManagement;
