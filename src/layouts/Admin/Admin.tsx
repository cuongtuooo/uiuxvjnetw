import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AccountManagement from "./AccountManagement";
import NewsManagement from "./NewsManagement";
import ProductPackageManagement from "./ProductPackageManagement";
import "./Admin.css";
import Product from "../product/Product";

const Admin: React.FC = () => {
    const [packages, setPackages] = useState<{ name: string; price: string }[]>([
        { name: "Package 1", price: "$100" },
        { name: "Package 2", price: "$200" },
    ]);

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-3 d-md-block bg-dark text-white p-3">
                    <h2 className="text-center mb-4">Admin Menu</h2>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link className="nav-link text-white" to="/admin/account-management">
                                Account Management
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link className="nav-link text-white" to="/admin/news-management">
                                News Management
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link className="nav-link text-white" to="/admin/product-package-management">
                                Product Package Management
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Content */}
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <h1 className="my-4">Admin Dashboard</h1>
                    <Routes>
                        <Route path="account-management" element={<AccountManagement />} />
                        <Route path="news-management" element={<NewsManagement />} />
                        <Route path="product-package-management" element={<ProductPackageManagement />}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default Admin;
