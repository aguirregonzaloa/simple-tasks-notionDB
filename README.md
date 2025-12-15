# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## REST Client Extension VS Code

To use the REST Client extension in VS Code, follow these steps:

1. Install the REST Client extension from the VS Code marketplace.
2. Create a new file with the `.http` extension in your project directory.
3. Write your REST API request in the file. For example:

```http
GET https://api.notion.com/v1/databases/[database_id]
Authorization: Bearer [your_access_token]
Notion-Version: 2022-06-28

GET https://api.notion.com/v1/data_sources/[datasource_id]
Authorization: Bearer [your_access_token]
Notion-Version: 2022-06-28
```

4. Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac) to open the command palette.
5. Type `Rest Client: Send Request` and select it from the list.
6. The REST Client extension will send the request to the specified URL and display the response in the VS Code terminal.

## Connection to a Database on Notion

Create a file `.env` add the following variables:

```env
NOTION_SECRET_KEY=your_secret_key
NOTION_DB_ID=your_database_id
NOTION_DATASOURCE_ID=your_datasource_id
```

Then, in your Astro project, you can use the `env` module to access these variables. for example:

```javascript
import.meta.env.NOTION_DATASOURCE_ID;
```
