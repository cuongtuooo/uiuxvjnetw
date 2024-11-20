import React, { createContext, useContext, useState } from "react";

interface Package {
    name: string;
    image: string;
    details: string[];
}


interface PackageContextType {
    packages: Package[];
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [packages, setPackages] = useState<Package[]>([
        {
            name: "VJTEL 1 tháng",
            image: "./icon/product1.png",
            details: [
                "Phù hợp với cá nhân, hộ gia đình",
                "Phí hòa mạng",
                "Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz",
                "Tặng: Lắp đặt nhanh trong ngày",
            ]
        },

        {
            name: "VJTEL 3 tháng",
            image: "./icon/product2.svg",
            details: [
                "Phù hợp với cá nhân, hộ gia đình",
                "Phí hòa mạng",
                "Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz",
                "Tặng: Lắp đặt nhanh trong ngày",
            ]
        },

        {
            name: "VJTEL 6 tháng",
            image: "./icon/product3.png",
            details: [
                "Phù hợp với cá nhân, hộ gia đình",
                "Phí hòa mạng",
                "Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz",
                "Tặng: Lắp đặt nhanh trong ngày",
            ]
        },

        {
            name: "VJTEL 12 tháng",
            image: "./icon/product4.svg",
            details: [
                "Phù hợp với cá nhân, hộ gia đình",
                "Phí hòa mạng",
                "Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz",
                "Tặng: Lắp đặt nhanh trong ngày",
            ]
        },


    ]);

    return (
        <PackageContext.Provider value={{ packages, setPackages }}>
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
