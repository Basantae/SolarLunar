
# 🌗 SolarLunar — Theme Switcher (React + Vite)

**SolarLunar** is a lightweight React application built with **Vite**, showcasing how to seamlessly implement a theme switcher (Light 🌞 / Dark 🌙 mode) using **React state** and **CSS variables**.
It’s designed for developers who want a minimal yet scalable foundation for modern theming in React apps.



---

## ✨ Features

* 🌞 **Light & Dark Theme Toggle** — Simple switch between solar and lunar modes
* ⚡ **Vite-Powered** — Ultra-fast development with Hot Module Replacement (HMR)
* 🧩 **Minimal Setup** — Clean and easy-to-customize architecture
* 🧹 **Code Quality** — ESLint integrated for clean, consistent code
* 💅 **Modern Styling** — Uses CSS variables for flexible theming

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Basantae/SolarLunar.git
cd SolarLunar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🛠️ Tech Stack

* **React** — UI Library
* **Vite** — Build tool and dev server
* **JavaScript (ES6+)**
* **Tailwind CSS **


---


---

## 💡 How It Works

The theme is controlled using a simple **React state** hook that toggles between `"light"` and `"dark"` modes.
CSS variables dynamically update based on the active theme, ensuring smooth transitions and modular design.

```jsx
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
};
```

---

## 🤝 Contributing

Contributions are welcome!
If you have suggestions or improvements, feel free to **fork** this repository and submit a **pull request**.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🌍 Author

**👤 Bashanta Rokaha**
💻 Passionate about web development, design systems, and interactive UI.
📎 [GitHub Profile → Basantae](https://github.com/Basantae)
