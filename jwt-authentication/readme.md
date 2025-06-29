# 📝 Secret To-Do List API (with JWT Authentication)

A simple Node.js + Express backend API with JWT-based stateless authentication, secure password hashing using bcrypt, and user-specific data access control.

---

## 📦 Installation
1. **Clone the repository:** <br>
```js
git clone https://github.com/Akash-minfy/week3.git
cd week3/jwt-authentication
```
2. **Install dependencies:**
```js
npm install
```
3. **Create .env file:**
```js
touch .env
```
Add the following to .env:
```js
SECRET_KEY=your_super_secret_key
PORT=3000
```
4. **Start the server:**
```js
node app.js
```
### Difficulty: Easy
**POST /register**
![Screenshot (107)](https://github.com/user-attachments/assets/ee47c62d-64b4-4b93-9297-0b6da2f72bbc) <br><br><br><br>

**POST /login:**
![Screenshot (131)](https://github.com/user-attachments/assets/ca583d50-8668-48d9-8a48-dcaa98b5f546) <br><br><br><br>

**If the token is missing or invalid, it should send a 401 Unauthorized or 403 Forbidden status.**
![Screenshot (108)](https://github.com/user-attachments/assets/8f04148a-9781-4901-afee-da8586596dd7) <br><br><br><br>
![Screenshot (109)](https://github.com/user-attachments/assets/a80d686d-9607-4703-bebf-0d9d69f5988e) <br><br><br><br>

**Create a GET /api/secret-quote endpoint.**
![Screenshot (110)](https://github.com/user-attachments/assets/60acef16-e037-4e49-a584-bf49cc8b59f9) <br><br><br><br>

### Difficulty: Medium

**POST /api/todos**<br>
**Registered as Akash and posting ToDo Task**
![Screenshot (110)](https://github.com/user-attachments/assets/bc201c89-c044-4344-8425-a700bf1e95b6) <br><br><br><br>

**GET /api/todos: Should return only the to-do items belonging to the currently logged-in user.**
![Screenshot (112)](https://github.com/user-attachments/assets/18e3ae9e-f45d-4704-8f84-bf36f5cb3ffc) <br><br><br><br>

**DELETE /api/todos/:id: Should only allow a user to delete a to-do item if they are the owner of that item.**
![Screenshot (113)](https://github.com/user-attachments/assets/be304eb4-51a5-45d9-84fa-132cbe2bcacc)  <br><br><br><br>

**Registered as Sai and posting ToDo Task**
![Screenshot (115)](https://github.com/user-attachments/assets/2245da9b-5952-4156-ad48-dafadb3dce55) <br><br>
![Screenshot (116)](https://github.com/user-attachments/assets/1e7d32bd-60b5-4016-a93b-c6dbe7fe7822) <br><br>
![Screenshot (117)](https://github.com/user-attachments/assets/ec07e8b5-cb38-4f5e-bd1f-694a8757e3be) <br><br><br><br>

**Create a new middleware authorizeAdmin that checks if req.user.role is 'admin'.**
![Screenshot (118)](https://github.com/user-attachments/assets/b28e5813-4b1e-4a45-a412-5f39495a951a) <br><br>
![Screenshot (119)](https://github.com/user-attachments/assets/4ef30f64-2c1d-4bd3-a0a6-6d507db256b2) <br><br><br><br>

**GET /api/admin/all-todos route protected by both the auth and admin middlewares that returns all to-dos from all users.**
![Screenshot (120)](https://github.com/user-attachments/assets/7b8eef4e-8c7d-46c7-b1fd-b04fc60e168d) <br><br><br><br>
