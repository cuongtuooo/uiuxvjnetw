import React, { useState } from "react";
import { usePackage } from "../../Api/PackageContext";

const ProductPackageManagement: React.FC = () => {
    const { packages, addPackage, updatePackage, deletePackage } = usePackage();

    const [formState, setFormState] = useState({
        name: "",
        details: [] as string[],
        image: "",
    });
    const [editingId, setEditingId] = useState<number | null>(null);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId !== null) {
            await updatePackage(editingId, formState);
        } else {
            await addPackage(formState);
        }
        resetForm();
    };

    const handleEdit = (id: number) => {
        const packageToEdit = packages.find((pkg) => pkg.id === id);
        if (packageToEdit) {
            setFormState(packageToEdit);
            setEditingId(id);
        }
    };

    const handleDelete = async (id: number) => {
        await deletePackage(id);
    };

    const resetForm = () => {
        setFormState({ name: "", details: [], image: "" });
        setEditingId(null);
    };

    const handleAddDetail = () => {
        setFormState({ ...formState, details: [...formState.details, ""] });
    };

    return (
        <div>
            <h2>Product Package Management</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        disabled={editingId !== null}
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
                <button type="submit">{editingId !== null ? "Update" : "Add"} Package</button>
                {editingId !== null && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>

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
                        <tr key={pkg.id}>
                            <td>{pkg.name}</td>
                            <td>
                                <ul>
                                    {pkg.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(pkg.id)}>Edit</button>
                                <button onClick={() => handleDelete(pkg.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductPackageManagement;
