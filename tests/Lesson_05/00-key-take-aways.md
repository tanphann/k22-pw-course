# 🎓Lesson 05: DOM, Playwright basic

### Khái niệm DOM

**DOM** là viết tắt của **Document Object Model** – tức **Mô hình Đối tượng Tài liệu**. Đây là một tiêu chuẩn lập trình được sử dụng trong lập trình web, cho phép các ngôn ngữ như **JavaScript** tương tác và thay đổi nội dung, cấu trúc, và kiểu dáng (style) của một tài liệu HTML hoặc XML.

**🔍 Hiểu đơn giản:**

DOM là **cách trình duyệt hiểu và biểu diễn tài liệu HTML dưới dạng một cấu trúc dạng cây** (tree structure). Mỗi phần tử trong HTML như `<div>`, `<p>`, `<img>`, ... sẽ là một **"node" (nút)** trong cây DOM.

**🧩 DOM dùng để làm gì?**

- Thay đổi nội dung trang web động (ví dụ: cập nhật giá trị, hiển thị thời gian, thêm/xóa phần tử, v.v.).
- Giao tiếp giữa người dùng và website thông qua sự kiện (click, nhập liệu...).
- Kiểm tra và thay đổi CSS của các phần tử HTML.

---

**Selector** (trình chọn) là **cách để xác định và truy cập một phần tử (element)** cụ thể trong tài liệu HTML hoặc XML.

**🧭 Ví dụ đơn giản:**

Giả sử bạn có đoạn HTML:

```html
<input type="text" id="username" class="form-input" name="user" />
```

Bạn có thể dùng các selector sau để tìm phần tử `<input>` này:

- `#username` → selector theo ID.
- `.form-input` → selector theo class.
- `input[name="user"]` → selector theo thuộc tính.
- Mối quan hệ với các phần tử khác (cha, con, anh chị em).

## **🔍 Có 3 loại selecter thường dùng?**

1. **XPath**
    
    **✅ XPath Selector là gì?**
    
    **XPath** (XML Path Language) là một **ngôn ngữ để điều hướng qua các phần tử và thuộc tính trong tài liệu XML/HTML.**
    
    XPath cho phép bạn **viết biểu thức để truy cập phần tử** chính xác dựa trên:
    
    - Vị trí trong cây DOM.
    - Thuộc tính.
    - Giá trị văn bản
    
    **1. Absolute XPath (XPath tuyệt đối):**
    
    - Đi từ gốc của cây DOM (`/html/body/...`).
    - Dễ gãy khi DOM thay đổi.
    
    🔹 Ví dụ:
    
    ```html
    /html/body/div[1]/form/input[1]
    ```
    
    **2. Relative XPath (XPath tương đối):**
    
    - Tìm phần tử dựa trên điều kiện, không cần đi từ gốc.
    - **Thường dùng hơn trong automation.**
    
    🔹 Ví dụ:
    
    ```html
    //input[@id='username']
    ```
    
2. **CSS Selector**
    - Ngắn gọn, performance cao
    - Dùng cho các trường hợp dễ tìm.
    - Không linh hoạt bằng XPath
    
    ```jsx
    VD: .add-to-cart
    ```
    
3. **Playwright selector**
    - Chỉ dùng riêng cho Playwright
    - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
    - Hướng tới “giống người dùng đang nhìn thấy gì”
    
    ```jsx
    VD: page.getByText(“Add to cart”);
    ```
    

***Thứ tự ưu tiên sử dụng: Playwright selector > CSS Selector > XPath***

---

### Playwright basic syntax

**🧪 1. test() – Tạo 1 test case**

```jsx
import { test, expect } from '@playwright/test';

test('tên test case', async ({ page }) => {
  // Nội dung test
});
```

---

**📌 2. step() – Ghi chú bước test (for logging/debug)**

```jsx
import { test } from '@playwright/test';

test('ví dụ dùng step', async ({ page }) => {
  await test.step('Bước 1: Truy cập trang', async () => {
    await page.goto('https://example.com');
  });

  await test.step('Bước 2: Nhấn nút', async () => {
    await page.click('button#submit');
  });
});
```

---

🚀 **3. Basic Actions – Hành động cơ bản**

**🔹 Navigate – Truy cập trang**

```jsx
await page.goto('https://example.com')
```

**🔹 Click – Nhấn chuột vào nút hoặc thẻ**

```jsx
await page.click('button#login');
```

**🔹 Input – Nhập dữ liệu vào ô input**

```jsx
await page.locator("//input[@id='username']").fill('Playwright Viet Nam');

await page.fill('input[name="username"]', 'myUsername');
```

**🔹 Radio / Checkbox – Chọn radio hoặc checkbox**

```jsx
// Checkbox
await page.check('input[type="checkbox"]');

// Radio
await page.check('input[value="male"]');

//Nếu muốn bỏ chọn checkbox:
await page.uncheck('input[type="checkbox"]');
```

**🔹 Select Option – Chọn 1 giá trị từ dropdown**

```jsx
// chọn theo value
await page.selectOption('select#country', 'VN'); 

//Hoặc chọn theo label/text:
await page.selectOption('select#country', { label: 'Vietnam' });
```

**🔹 Set Input File – Gửi file vào ô input type="file"**

```jsx
await page.setInputFiles('input[type="file"]', 'path/to/file.pdf');

//Nếu chọn nhiều file:
await page.setInputFiles('input[type="file"]', [
  'path/to/file1.png',
  'path/to/file2.jpg'
]);
```