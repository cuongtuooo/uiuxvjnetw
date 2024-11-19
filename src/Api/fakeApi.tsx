interface User {
    email: string;
    password: string;
}

let users: User[] = []; // Mảng chứa dữ liệu người dùng
users.push({email: 'admin@gmail.com', password: '12345'})

export const registerUser = (user: User) => {
    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
        throw new Error("Email is already registered.");
    }

    // Thêm người dùng vào mảng
    users.push(user);
    return user; // Trả về người dùng đã đăng ký
};

export const loginUser = (email: string, password: string) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    return user; // Trả về người dùng khi đăng nhập thành công
};
