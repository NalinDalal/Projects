initialise the backend folder

```bash
 npm create hono@latest
Need to install the following packages:
create-hono@0.9.2
Ok to proceed? (y) y


> npx
> create-hono

create-hono version 0.9.2
? Target directory backend
? Which template do you want to use? cloudflare-workers
✔ Cloning the template
? Do you want to install project dependencies? yes
? Which package manager do you want to use? npm
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd backend
```

initialise the routes with appropriate methods

```ts
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signup", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog", (c) => {
  return c.text("Hello Hono from blog!");
});
```

to run the application

```bash
npm run dev
```

initialise prisma

```bash
npm i prisma
npx prisma init
```

cli will use .env file to connect to database, put database url in .env file
backend utilise wrangler.toml to connect to database, prisma url in it

initialise the schema

migrate the database->

```bash
npx prisma migrate dev --name init_schema
```

generate prisma client->

```bash
npx prisma generate --no-engine
```

add the accelerate engine ->

```bash
npm install @prisma/extension-accelerate
```

initialise the prisma client

do the code generation

see we did the code in backend

now create a common folder

```bash
npm init -y
npx tsc --init

```
