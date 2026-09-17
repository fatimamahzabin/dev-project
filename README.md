# Dev Stack

## 🚀 Project Description

Dev Stack is a modern and responsive React application that allows users to explore different web technologies and create their own development stack. The application features a clean interface, smooth user experience, and responsive design, making it easy to use on both desktop and mobile devices.

## 🛠️ Technologies Used

* React (with Vite)
* TypeScript
* Tailwind CSS
* React Toastify

## ✨ Key Features

* Browse different technologies and add them to your personal development stack.
* Receive instant toast notifications when adding, removing, or clearing technologies.
* Enjoy a fully responsive interface with a modern gradient-themed design.

---

# React Theory & Questions

## 1. What is JSX, and why is it used in React?

**Answer:**
JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like code inside JavaScript files. It makes React components easier to read, write, and maintain while allowing JavaScript and UI code to work together.

---

## 2. What is the difference between props and state?

**Answer:**

**Props**

* Passed from a parent component to a child component.
* Read-only and cannot be changed by the child.
* Used to share data between components.

**State**

* Managed inside a component.
* Can change over time based on user actions or application logic.
* Updating state causes the component to re-render.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**
The `useState` hook allows functional components to store and update data. In this project, it was used to manage the selected technologies, search input, and other interactive data that changes while the user uses the application.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**
The `useEffect` hook is used to perform side effects after a component renders, such as fetching data or updating the document. In this project, it was used to load the local JSON data when the application starts, ensuring the data is loaded only once without causing unnecessary re-renders.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**
A unique `key` helps React identify each item in a list. This allows React to update only the items that have changed, improving performance and reducing unnecessary re-rendering.

---

## 6. What is conditional rendering? Show one place you used it.

**Answer:**
Conditional rendering means displaying different content based on a condition. In this project, it is used to show an empty message when no technologies have been added to the development stack. Once items are added, the list is displayed instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send data back to the parent?

**Answer:**

**Parent → Child:**
Data is passed through **props**.

Example:

```tsx
<ChildComponent techData={data} />
```

**Child → Parent:**
The parent passes a callback function as a prop. The child calls that function and sends the required data back to the parent.

Example:

```tsx
<ChildComponent onSelect={handleSelect} />
```
