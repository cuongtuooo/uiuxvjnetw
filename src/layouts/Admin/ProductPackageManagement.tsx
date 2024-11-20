import React, { useState } from "react";

const ProductPackageManagement: React.FC = () => {
    const [packages, setPackages] = useState<{ name: string; price: string }[]>([
        { name: "Package 1", price: "$100" },
        { name: "Package 2", price: "$200" },
    ]);

    const handleDelete = (name: string) => {
        setPackages(packages.filter((pkg) => pkg.name !== name));
    };

    return (
        <div>
            <h2>Product Package Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg.name}>
                            <td>{pkg.name}</td>
                            <td>{pkg.price}</td>
                            <td>
                                <button onClick={() => handleDelete(pkg.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductPackageManagement;
