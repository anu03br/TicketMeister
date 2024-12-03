# TicketMeister

**TicketMeister** is a responsive web application designed to showcase and explore event listings with a clean and modern interface. Built with React, Tailwind CSS, Vite, and ESLint, it emphasizes performance, accessibility, and maintainability.

## Features

- Responsive design using Tailwind CSS
- Dynamic routing with React Router
- Modular components like Navbar, Titlebar, EventCard, and Footerbar
- Integrated ESLint for code consistency and best practices
- Fast development and build process powered by Vite

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Build tool for a fast and optimized development experience
- **ESLint**: Linting tool to enforce coding standards and catch errors

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- A package manager like `npm` or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ticketmeister.git
   cd ticketmeister
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Start the Tailwind CLI build process
    ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```
    Run the CLI tool to scan your template files for classes and build your CSS. Keep watching for changed and apply them.
   
 ### Scripts

- **`npm run dev`**: Starts the development server
- **`npm run build`**: Builds the project for production
- **`npm run lint`**: Runs ESLint to check for coding issues
  
## Folder Structure
```bash
src/
├── components/    # Reusable React components
├── pages/         # Page components for routing
├── assets/        # Static assets (images, icons, etc.)
├── App.jsx        # Main app entry
├── index.css      # Global styles
├── main.jsx       # Vite entry point
```
### Acknowledgments
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
