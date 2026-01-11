<h1>TaskChecker Webpage</h1>

<div>
    <img src="https://img.shields.io/badge/License-Apache%20License%202.0-blue" alt="Apache License">
    <img src="https://img.shields.io/badge/version-Alpha-green" alt="Alpha Version">
</div>

<p>This webpage is a to-do list that makes scheduling tasks easy. The front end of the software was created using React and some of its libraries. Additionally, Tailwind CSS was used to style the UI. This software is still in the alpha version, which means that parts of the code have not been written yet.</p>

<strong>Technologies used:</strong>
<img src="https://img.shields.io/badge/Vite-646CFF?logo=Vite&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/Tailwind_CSS-grey?&logo=tailwind-css&logoColor=38B2AC" alt="Tailwind CSS">

<img src="./public/Screenshot.png" alt="Screenshot"/>

<h2>Run in Your Local Repository</h2>

<h3>Clone</h3>

First, you have to clone this remote repository. To clone it, you have to navigate to the desired directory where you want to clone the repository, using `cd`. Then, type the following command line:

```bash
git clone https://github.com/https://github.com/diegogonzalezloa/task-checker.git
```

Finally, open the cloned repository with the command `cd task-checker`

<h3>Install Dependencies</h3>

To install all necessary dependencies, you need to already have installed Node.js (or any package manager). This React project was created based on the build tool Vite; for that reason, run the following command to install the Vite's dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

You also have to install Tailwind's dependencies using the following command:

```bash
npm install tailwindcss @tailwindcss/vite # or yarn / pnpm
```

Finally, you must install additional dependencies necessary for the software to run correctly.

```bash
npm install react-router-dom # To route between pages
npm install ogl # Necessary for animation
npm install react-datepicker date-fns # For date and time inputs and formatting them
npm install styled-components # To style as vanilla CSS but change depending on JS variables
```

<h3>Start the development server</h3>

Just run this command line:

```bash
npm run dev # or yarn / pnpm
```

Then press the key `o` or click on the local link `http://localhost:5173/`

<h2>License</h2>

<a href="LICENSE.txt" target="_blank" rel="noopener noreferrer">Apache 2.0</a>
