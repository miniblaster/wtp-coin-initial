# WETP (We The People)

**Tomorrow's currency, today!**

Be part of the WETP revolution. Secure your financial future with a stable currency.

## Setting Up The Development Environment

### Step 0 (if necessary): Install the required resources

- [Git](https://git-scm.com/downloads)
- [Node v20.9.0](https://nodejs.org/en/blog/release/v20.9.0)

### Step 1: Download the repository in your WETP folder

```bash
> git clone https://github.com/sknampally/***.git
```

### Step 2: Setup the backend & MongoDB

**Step 2.1**: Move into backend folder, install the packages

```bash
> cd ./backend/ && npm install
```

or

```bash
> cd ./backend/ && yarn
```

**Step 2.2**: Setup MongoDB

Download latest MongoDB version from [MongoDB](https://www.mongodb.com/try/download/community). Install MongoDB and Mongo Compass (GUI for the DB) from the installer.

**Step 2.3**: Creating DB and tables

Now we can **execute the script** create_db.sh, create database and tables required. For executing the script,type:
`sh create_db.sh`

**Step 2.4**: Run the Backend Code

```bash
> npm run dev
```

or

```bash
> yarn dev
```

### Step 3: Setup the frontend code

**Step 3.1**: Open another terminal, move into frontend folder, install the packages.

```bash
> cd ../frontend/ && npm install
```

or

```bash
> cd ../frontend/ && yarn
```

**Step 3.2**: Copy the `.env.example` file to `.env.local` file.

```bash
> cp .env.example .env.local
```

**Step 3.3**: Set environment variables for running the project.

If you are running the backend locally, set `NEXT_PUBLIC_API_URL` to `http://localhost:8003/api`

/frontend/.env.local
```bash
> NEXT_PUBLIC_DEV_API_URL=http://localhost:8003/api
```

**Step 3.4**: Run the frontend code

```bash
> npm run dev
```

or

```bash
> yarn dev
```

### Step 4: Open in the browser

```bash
> http://localhost:3000
```
