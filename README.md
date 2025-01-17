# React Form Project

This project is a React-based form application designed to demonstrate the use of **React Toolkit**, **React Hook Form**, **state management**, and **form handling**.

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Node.js**: Download and install [Node.js](https://nodejs.org) (LTS version recommended).
- **npm**: Comes bundled with Node.js (verify installation with `npm -v`).
- **Git**: For cloning the repository (optional).

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

If you haven't already, clone the repository from GitHub:
```bash
git clone https://github.com/abhii-yadav/react-formProject.git
```

Navigate into the project directory:
```bash
cd react-formProject
```

### 2. Install Dependencies

Install all required packages using npm:
```bash
npm install
```
This command reads the `package.json` file and installs all dependencies into a local `node_modules` folder.

### 3. Start the Development Server

Run the following command to start the project:
```bash
npm start
```

- The development server will start, and the application will open in your default web browser.
- By default, it runs on [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### Common Issues

1. **Missing Dependencies**:
   If you encounter errors related to missing packages, ensure you've run `npm install`.

2. **Port Conflicts**:
   If the default port (3000) is already in use, you can specify another port:
   ```bash
   PORT=4000 npm start
   ```

3. **Node.js Version Issues**:
   Ensure you're using a compatible version of Node.js. Check the required version in `package.json` (if specified under `engines`).

### Clear Node Modules (If Necessary)

If you encounter persistent issues, try clearing the `node_modules` folder and reinstalling:
```bash
rm -rf node_modules
npm install
```

## Contributing

Feel free to fork this repository, make changes, and submit pull requests.

