# NIMR - Delivery Management System 

## Introduction

The **NIMR** is a comprehensive web application designed to streamline the management of deliveries, dispatch riders, and patient packages. Built with modern web technologies, it offers an intuitive interface for administrators to assign packages, monitor delivery statuses, and manage dispatch operations efficiently.

## Features

- **Dashboard Overview**: Quick insights into delivery statuses, pending assignments, and overall system health (Not implemented yet).
- **Deliveries Management**: View, filter, and sort deliveries based on various statuses such as Paid, Unpaid, Pending, Successful, and Failed.
- **Dispatch Rider Assignment**: Assign packages to dispatch riders with real-time tracking and status updates.
- **Patient Information**: Detailed view of patient information, including contact details and delivery schedules.

## Technology Stack

- **Frontend**:

  - [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript for static typing.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
  - [Lucide Icons](https://lucide.dev/) - Icon library for scalable vector icons.

- **State Management**:

  - React's built-in `useState` and `useMemo` hooks.
  - [React Use Wizard](https://www.npmjs.com/package/react-use-wizard) - For multi-step form navigation.

- **Utilities**:

  - [clsx](https://www.npmjs.com/package/clsx) - Conditional classNames utility.
  - @radix-ui - Adopted for building accessible UI components fast to speed up development process. 

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

**Clone the Repository**

```bash
git clone https://github.com/Nosenti/nimr.git
cd nimr
```

**Installing Dependencies**

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

**Run the application:**

1. Using npm:

   ```bash
   npm run dev
   ```

   using yarn:

   ```bash
   yarn run dev
   ```

 