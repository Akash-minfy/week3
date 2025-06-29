# 🍽️ Recipe Finder App

**Recipe Finder** is a responsive and user-friendly web application built with **React** that allows users to search for meals, view detailed recipes, and save their favorite dishes — all powered by the free [TheMealDB API](https://www.themealdb.com/api.php).

---

## 🚀 Features

### 🔍 Search & Discover
- Search for recipes by name using the search bar.
- Display a list of matching meals with images and names.
- Clean grid layout that adjusts to screen sizes. <br><br>
![Screenshot (122)](https://github.com/user-attachments/assets/a0e69bf0-33a0-413f-ba61-43171aecadd6)<br><br>
![Screenshot (125)](https://github.com/user-attachments/assets/42a3ce7f-a682-41f1-9307-9e15eb30951a)<br><br>
![Screenshot (123)](https://github.com/user-attachments/assets/2cab80f5-9893-42f3-8c6e-0bb7e6333e32)<br><br>
![Screenshot (124)](https://github.com/user-attachments/assets/0398fc4a-b82c-4ce8-8cb8-580d6a70f313)<br><br><br>
**In case of wrong search** <br> <br>
![Screenshot (126)](https://github.com/user-attachments/assets/3f133e74-14ec-4f50-a799-1ef98c55329c) <br><br><br><br>



### 📖 Recipe Details
- Click on any recipe to view its full details:
  - Meal name, category, image
  - Step-by-step cooking instructions
  - Automatically parsed list of ingredients and their measurements <br><br>
    ![Screenshot (127)](https://github.com/user-attachments/assets/41b5ab1c-497c-4c91-82a6-95e2d86791a8) <br><br>
    ![Screenshot (129)](https://github.com/user-attachments/assets/5d61b6c3-db98-4516-9b6d-816b3373ce60) <br><br>


### ❤️ Favorites System
- Save your favorite recipes by clicking "Add to Favorites".
- Remove them anytime with "Remove from Favorites".
- Favorites are stored in the browser using `localStorage`. <br><br>
![Screenshot (129)](https://github.com/user-attachments/assets/dc28c6d1-9947-4b5f-8228-f31df7265d4e) <br><br>
![Screenshot (128)](https://github.com/user-attachments/assets/8fdde7b0-70a1-4ef2-9d05-de440af8d550) <br><br>
![Screenshot (130)](https://github.com/user-attachments/assets/53c7c454-eb9b-4b4c-8251-955a0ab3f144) <br><br>

### 🌐 Routing & Navigation
- Built using `react-router-dom` for a Single Page Application (SPA) experience.
- Routes:
  - `/` — Home with search functionality
  - `/recipe/:recipeId` — Detailed recipe page
  - `/favorites` — Page displaying all saved favorites

### 🧠 Global State with Context + useReducer
- Favorites state is managed globally using the React Context API and `useReducer`.
- Ensures consistent and scalable state management across components.

---

## 🛠️ Tech Stack

- **React** (via Create React App)
- **React Router DOM** for routing
- **Context API + useReducer** for global state management
- **CSS** for styling (fully responsive)
- **localStorage** for data persistence
- **TheMealDB API** for recipe data

---

## 📦 Getting Started

### ✅ Prerequisites

Make sure you have **Node.js** and **npm** installed:

```bash
node -v
npm -v
```

## Installations
**Clone the repository:** <br>
```js
git clone https://github.com/Akash-minfy/week3.git
cd week3/recipe-finder
```
**Install dependencies:**
```js
npm install
```
**Start the development server:**
```js
npm start
```
**Open http://localhost:3000 to view it in the browser.** <br> <br> <br> <br> <br> <br>

 

