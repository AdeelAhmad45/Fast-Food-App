
# Food App with React, Redux, Redux Toolkit, and TailwindCSS

This is a food app developed using React, Redux, Redux Toolkit, and various other libraries such as `hot-toast`, and styled with `TailwindCSS`. The app is structured around several Redux slices, including `searchSlice`, `addSlice`, `removeSlice`, and `categorySlice`.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Redux Slices](#redux-slices)
- [Styling with TailwindCSS](#styling-with-tailwindcss)

## Introduction
This food app is a comprehensive example of a modern web application, using React for the frontend, Redux for state management, Redux Toolkit for efficient store configuration, and `hot-toast` for user-friendly notifications. Additionally, the app is styled using `TailwindCSS` to create a responsive and visually appealing user interface.

## Features
- Browse a variety of food items categorized by type.
- Add food items to the cart.
- Remove items from the cart.
- Search for specific food items using the search functionality.
- Sleek and responsive user interface with `TailwindCSS`.

## Usage
- Browse food items by category.
- Add items to your shopping cart.
- Remove items from your shopping cart.
- Utilize the search feature to find specific items.
- Experience a visually appealing and responsive UI thanks to `TailwindCSS`.

## Redux Slices
The Redux store is organized into slices to keep the codebase modular and maintainable. Key Redux slices used in this project include:
- `searchSlice`: Manages search functionality.
- `addSlice`: Handles the addition of items to the shopping cart.
- `removeSlice`: Manages the removal of items from the shopping cart.
- `categorySlice`: Manages food categories and filtering.

## Styling with TailwindCSS
The user interface is designed with `TailwindCSS`, providing a clean and responsive design. You can customize the styling by editing the `tailwind.config.js` file to match your preferences.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
