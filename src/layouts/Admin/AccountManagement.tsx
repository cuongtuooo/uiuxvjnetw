import React, { useState } from "react";

const AccountManagement: React.FC = () => {
    const [accounts, setAccounts] = useState<{ email: string; role: string }[]>([
        { email: "user1@example.com", role: "Admin" },
        { email: "user2@example.com", role: "User" },
    ]);

    const handleDelete = (email: string) => {
        setAccounts(accounts.filter((account) => account.email !== email));
    };

    return (
        <div>
            <h2>Account Management</h2>
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
