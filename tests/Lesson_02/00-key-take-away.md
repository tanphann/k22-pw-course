# **🎓 Lesson 02 - Git & JavaScript** #

## 🔧 **GIT - Version Control System (VCS)**

### 📁 **Các loại hệ thống quản lý phiên bản:**

- 🖥️ **Local**: Dữ liệu lưu trên máy cá nhân
- 🏢 **Centralized**: Lưu trên máy chủ tập trung
- 🌐 **Distributed**: Lưu tại nhiều máy khác nhau, ví dụ như Git

---

### 🗂️ **3 vùng làm việc trong Git:**

1. **Working Directory** 📝
    
    → Nơi chứa file mới hoặc đã chỉnh sửa
    
2. **Staging Area** 📤
    
    → File chuẩn bị để commit
    
3. **Repository** 📦
    
    → Lưu các phiên bản đã commit
    

---

### 💻 **Các lệnh Git cơ bản:**

| Lệnh | Chức năng |
| --- | --- |
| `git init` | 🚀 Khởi tạo repository |
| `git add .` | ➕ Đưa tất cả file vào Staging |
| `git add <file_name>` | ➕ Chỉ thêm 1 file cụ thể |
| `git commit -m "message"` | 💬 Tạo một commit có message |
| `git push origin main` | ☁️ Đẩy commit lên GitHub (nhánh main) |
| `git status` | 🔍 Kiểm tra trạng thái file
🔴 **Màu đỏ**: File trong Working Directory
🟢 **Màu xanh**: File đã nằm trong Staging Area |
| `git log` | 📜 Xem lịch sử commit |

---

### 🔁 **Git Workflow:**

`git init` → `git add` → `git commit` → `git push`

---

### 🔁 Type của commit**:**

- chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
- feat: thêm tính năng mới, test case mới
- fix: sửa lỗi 1 test trước đó

---

## ✨ **JAVASCRIPT - Tổng quan cơ bản**

### 📌 **Biến và khai báo**

- `const` : Không thể gán lại giá trị
- `let` : Có thể gán lại, phạm vi trong block
- `var` : Có thể gán lại, phạm vi trong function

### 🧮 **Toán tử**

- ✅ **Comparison operators**: `==`, `===`, `!=`, `<`, `>`
- 🔄 **Unary operator**: `++`, `-`, `typeof`
- ➕ **Arithmetic operators**: `+`, , , `/`, `%`

### 🔀 **Cấu trúc điều kiện & vòng lặp**

### 📍 **Câu lệnh điều kiện:**

```jsx
if (condition) {
  // Code khi điều kiện đúng
} else if (otherCondition) {
  // Code khi điều kiện khác đúng
} else {
  // Code khi không có điều kiện nào đúng

```

🔘 **Switch case:**

```jsx
switch (value) {
  case 'A':
    // Code cho A
    break;
  case 'B':
    // Code cho B
    break;
  default:
    // Code mặc định
}
```

---

### 🔁 **Vòng lặp:**

📌 **For loop:**

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

📌 **While loop:**

```jsx
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

📌 **Do...while loop:**

```jsx
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
