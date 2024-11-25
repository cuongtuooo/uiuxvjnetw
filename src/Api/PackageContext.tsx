import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface Package {
    id: number; // Thêm ID cho các sản phẩm từ API
    name: string;
    image: string;
    details: string[];
}

interface PackageContextType {
    packages: Package[];
    fetchPackages: () => void; // Hàm để reload dữ liệu từ API
    addPackage: (pkg: Omit<Package, "id">) => Promise<void>;
    updatePackage: (id: number, pkg: Omit<Package, "id">) => Promise<void>;
    deletePackage: (id: number) => Promise<void>;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [packages, setPackages] = useState<Package[]>([]);

    const API_URL = "http://127.0.0.1:8000/api/sanpham"; // URL API Laravel

    // Lấy danh sách packages từ API
    const fetchPackages = async () => {
        try {
            const response = await axios.get(API_URL);
            setPackages(response.data);
        } catch (error) {
            console.error("Failed to fetch packages:", error);
        }
    };

    // Thêm mới package
    const addPackage = async (pkg: Omit<Package, "id">) => {
        try {
            const response = await axios.post(API_URL, pkg);
            setPackages((prev) => [...prev, response.data.sanpham]);
        } catch (error) {
            console.error("Failed to add package:", error);
        }
    };

    // Cập nhật package
    const updatePackage = async (id: number, pkg: Omit<Package, "id">) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, pkg);
            setPackages((prev) =>
                prev.map((item) => (item.id === id ? response.data.sanpham : item))
            );
        } catch (error) {
            console.error("Failed to update package:", error);
        }
    };

    // Xóa package
    const deletePackage = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setPackages((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Failed to delete package:", error);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, []);

    return (
        <PackageContext.Provider
            value={{ packages, fetchPackages, addPackage, updatePackage, deletePackage }}
        >
            {children}
        </PackageContext.Provider>
    );
};

export const usePackage = () => {
    const context = useContext(PackageContext);
    if (!context) {
        throw new Error("usePackage must be used within a PackageProvider");
    }
    return context;
};
