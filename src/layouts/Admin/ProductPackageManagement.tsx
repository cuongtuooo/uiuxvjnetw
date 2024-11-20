import React, { useState } from "react";
import { usePackage } from "../../Api/PackageContext";

const ProductPackageManagement: React.FC = () => {
    const { packages, setPackages } = usePackage();

    // State để lưu thông tin gói sản phẩm mới hoặc chỉnh sửa
    const [formState, setFormState] = useState({
        name: "",
        details: [] as string[],
        image: "", // Thêm thuộc tính image
    });

    const [isEditing, setIsEditing] = useState(false);

    // Xử lý khi nhập dữ liệu vào form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
        const { name, value } = e.target;

        if (name === "details" && typeof index === "number") {
            const updatedDetails = [...formState.details];
            updatedDetails[index] = value;
            setFormState({ ...formState, details: updatedDetails });
        } else {
            setFormState({ ...formState, [name]: value });
        }
    };

    // Thêm mới hoặc cập nhật gói sản phẩm
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Đảm bảo formState có đủ các thuộc tính
        if (isEditing) {
            setPackages((prev) =>
                prev.map((pkg) =>
                    pkg.name === formState.name ? { ...pkg, ...formState } : pkg
                )
            );
        } else {
            setPackages((prev) => [...prev, { ...formState, image: "default.jpg" }]); // Thêm giá trị mặc định cho image
        }
        resetForm();
    };

    // Xử lý xóa gói sản phẩm
    const handleDelete = (name: string) => {
        setPackages(packages.filter((pkg) => pkg.name !== name));
    };

    // Xử lý chỉnh sửa gói sản phẩm
    const handleEdit = (name: string) => {
        const packageToEdit = packages.find((pkg) => pkg.name === name);
        if (packageToEdit) {
            setFormState(packageToEdit);
            setIsEditing(true);
        }
    };

    // Reset form về trạng thái mặc định
    const resetForm = () => {
        setFormState({
            name: "",
            details: [],
            image: "", // Reset thuộc tính image
        });
        setIsEditing(false);
    };

    // Thêm chi tiết mới vào danh sách `details`
    const handleAddDetail = () => {
        setFormState({
            ...formState,
            details: [...formState.details, ""],
        });
    };

    return (
        <div>
            <h2>Product Package Management</h2>
            {/* Form thêm hoặc chỉnh sửa gói sản phẩm */}
            <div className="form__product-wraper">
                <form className="form__product" onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            required
                            disabled={isEditing} // Không cho sửa tên khi đang edit
                        />
                    </div>
                    <div>
                        <label>Details:</label>
                        <ul>
                            {formState.details.map((detail, index) => (
                                <li key={index}>
                                    <input
                                        type="text"
                                        name="details"
                                        value={detail}
                                        onChange={(e) => handleInputChange(e, index)}
                                    />
                                </li>
                            ))}
                        </ul>
                        <button type="button" onClick={handleAddDetail}>
                            + Add Detail
                        </button>
                    </div>

                    {/* <div>
                        <label>Image:</label>
                        <input
                            type="file"
                            name="image"
                            value={formState.image}
                            onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                        />
                    </div> */}
                    <button className="button-form" type="submit">{isEditing ? "Update Product" : "Add Product"}</button>
                    {isEditing && <button className="button-form" type="button" onClick={resetForm}>Cancel</button>}
                </form>
            </div>

            {/* Danh sách gói sản phẩm */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg.name}>
                            <td>{pkg.name}</td>
                            <td>
                                <ul>
                                    {pkg.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(pkg.name)}>Edit</button>
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
