# Portfolio Website

This is a personal portfolio website built with [Nuxt.js](https://nuxt.com/), a powerful framework for creating modern web applications with [Vue.js](https://vuejs.org/). The project uses [Nuxt Content](https://content.nuxt.com/) for content management, allowing you to write articles and project descriptions in Markdown. Styling is handled by [Tailwind CSS](https://tailwindcss.com/).

## Features

*   **Nuxt.js v4**: The latest version of Nuxt.js, offering a great developer experience and powerful features.
*   **Vue.js v3**: The latest version of the progressive JavaScript framework.
*   **Nuxt Content v3**: Fetches and displays content from Markdown files, making it easy to manage your portfolio.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Markdown Support**: Write your content in Markdown with syntax highlighting for code blocks.
*   **Responsive Design**: The layout is designed to work on all screen sizes.

## Project Structure

*   `content/`: Contains your portfolio content in Markdown files.
*   `pages/`: Defines the routes and views of your application.
*   `components/`: Contains reusable Vue components.
*   `assets/`: Stores static assets like CSS, images, and fonts.
*   `public/`: For files that need to be publicly accessible at the root of your site.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

To run the project in development mode with hot-reloading, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build

To build the application for production, run:

```bash
npm run build
```

This will create a `.output` directory with the production-ready application.

### Static Site Generation

To generate a static version of the site, run:

```bash
npm run generate
```

This will create a `dist/` directory that can be deployed to any static hosting service.

## Configuration

*   `nuxt.config.ts`: The main configuration file for Nuxt.js. Here you can configure modules, plugins, and other settings.
*   `tailwind.config.js`: The configuration file for Tailwind CSS. You can customize your design system here.

## Content Management

To add or modify content, you can create or edit Markdown files in the `content/` directory. Nuxt Content will automatically fetch and render the content on your pages.
