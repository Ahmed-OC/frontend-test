<div align="center">
  <h1>Test Frontend Leboncoin</h1>
</div>

## Features

This repository is made with:

- ⚡️ Next.js
- ⚛️ React
- ✨ TypeScript
- 💨 Tailwind CSS

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Ahmed-OC/frontend-test.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Populate `.env.local`:

```bash
API_BASE_URL=http://localhost:3005
```

### 4. Run the development server

#### Front
```bash
npm run dev
```
#### Back
```bash
npm run start-server
```
Open http://localhost:3000 with your browser to see the result.

### Thought process


I started by installing Tailwind because, for a small project like this, it's easier to begin development with it, and it reduces the CSS file size. Then, I began styling my pages with static data to complete the majority of my design.

After that, I thought about the architecture I could create for the API and how to fetch the data. I connected my front end with the data. To address the concern that the "infrastructure is a bit shaky," I implemented an ErrorBoundary to capture errors and redirect the user to a more user-friendly UI.

Following this, I added keyboard navigation and ARIA attributes to ensure accessibility for all users. Running out of time, I conducted a test, but it's not very satisfactory and can be significantly improved.

In a more global context, I modified the data in the database to align with my vision and added some UI features such as pictures. For the "send message" feature, I chose to make it static just to visualize its appearance and observe the processing. I simulated the sending of the token in the API calls to enhance security.

#### To test other users you can modify th return value of the file:
```bash
getLoggedUserId.ts
```

#### It took me approximately 6 hours to comprehend and complete the task.


