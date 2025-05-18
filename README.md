
# 🎉 Event RSVP App

A simple web application that allows users to view events and RSVP to them.

- ✅ Built with **React + TypeScript (Frontend)**
- ✅ Powered by **Express + TypeScript + MongoDB (Backend)**
- ✅ RSVP toggling with a hardcoded user (no auth)
- ✅ Modular and maintainable folder structure

---

## 🛠️ Run Locally

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone git@github.com:karanShaw000/rsvp-app.git
```

---

### 2. Setup the Backend

```bash
cd rsvp-app/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file from the sample:

```bash
cp .env.sample .env
```

Edit `.env` and provide the following values:

- `DB_URL` – Your MongoDB connection string
- `PORT` – (Optional) Default is `5000`

> ⚠️ If you change the backend port from `5000`, make sure to update the port in `client/src/libs/network.ts` for development.

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd ../client
```

Install dependencies:

```bash
npm install
```

Start the React app (usually runs on `http://localhost:5173`):

```bash
npm run dev
```

---

You're now all set to use **Rsvp-app** locally!

