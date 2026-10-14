# LearnHub

A full‑stack **Learning Management System** built with a modern JavaScript stack.

- **Frontend** – React, Vite, Tailwind CSS, React Router, Axios, React Hook Form, Zod, Lucide React, Recharts.
- **Backend** – Node.js, Express, MongoDB Atlas, Mongoose, JWT, bcryptjs, Zod.
- **Testing** – Vitest, React Testing Library, Supertest.
- **Tools** – ESLint, Prettier, dotenv, Git.

## Project structure
```
learnhub/
├─ client/          # React frontend
├─ server/          # Express API
├─ docs/            # Documentation
├─ .gitignore
├─ README.md
└─ package.json    # Root scripts
```

## Development
```bash
# install root dev tools (optional)
npm install

# install client dependencies
npm install --prefix client

# install server dependencies
npm install --prefix server

# start both in development mode (requires `concurrently` installed globally or as a dev dependency)
npm run dev
```

## Environment variables
Copy the example files and fill in the values:
```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

## Scripts
- `npm run dev` – runs client and server concurrently.
- `npm run client` – starts the Vite dev server.
- `npm run server` – starts the Express API (nodemon).
- `npm run lint` – runs ESLint on both parts.
- `npm test` – runs all tests.

## Docs
See the `docs/` folder for API reference and architecture details.
