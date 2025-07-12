# Chit-O-Chat
A simple group chatting application developed by using NodeJs,Socket.io,MongoDB and ExpressJs.

### Setup Steps:

- Install nodejs
- Intialize npm to create package.json file: `npm init --yes`
- Install expressjs: `npm install --save express`
- Install socket.io: `npm install --save socket.io`
- Use MongoDB for database
- Install mongoose (an object modelling for nodejs): `npm install --save mongoose`

---

## How to Run The Project Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### 2. Installation
- Navigate to the `ChatApp` directory.
- Install all dependencies with:
  ```bash
  npm install
  ```

### 3. Running the Application
1. **Start your local MongoDB service.**
   (For macOS with Homebrew, the command is `brew services start mongodb-community`)

2. **Start the Node.js server.**
   ```bash
   node server.js
   ```

### 4. Accessing the Application
- Open your web browser and navigate to [http://localhost:5000](http://localhost:5000)
