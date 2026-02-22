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

## Rendering Strategy: Server-Side Rendering vs Client-Side Rendering

### The Scenario

The **Deliveries Management** feature required displaying a paginated, filterable, and sortable table of patient deliveries. The decision of how to render this page — using **Server-Side Rendering (SSR)** or **Client-Side Rendering (CSR)** — was a key architectural choice.

### Decision-Making Process

#### Why SSR was chosen for data fetching (`app/in/deliveries/page.tsx`)

The top-level deliveries page is a **React Server Component** that fetches the delivery data before sending HTML to the browser:

```tsx
// app/in/deliveries/page.tsx
const DeliveriesPage: React.FC = async () => {
  const deliveries = await getData(); // Data fetched on the server
  return <DeliveriesPageClient deliveries={deliveries} />;
};
```

**Reasons for using SSR here:**
- **Performance**: The initial HTML arrives pre-populated with data, so users see content immediately without a loading spinner caused by a client-side fetch.
- **SEO**: Delivery records are rendered in the initial HTML payload, making the content accessible to search engine crawlers.
- **Security**: Data fetching logic (e.g., authentication tokens, database queries) stays on the server and is never exposed to the browser.
- **Reduced client bundle**: No data-fetching library (e.g., SWR, React Query) is needed on the client for the initial load.

#### Why CSR was chosen for interactivity (`app/in/deliveries/_components/deliveries-page-client.tsx`)

The interactive parts of the deliveries page — filtering by status, sorting by date, searching by patient name, and paginating — are handled by a **Client Component** marked with `'use client'`:

```tsx
// app/in/deliveries/_components/deliveries-page-client.tsx
'use client';

const DeliveriesPageClient: React.FC<DeliveriesPageClientProps> = ({ deliveries }) => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  // ...
};
```

**Reasons for using CSR here:**
- **Interactivity**: Filtering, sorting, and pagination require React state (`useState`, `useMemo`) and event handlers that only run in the browser.
- **Instant feedback**: Status filter buttons and sort dropdowns update the table immediately without a round-trip to the server, providing a fast, responsive experience.
- **No unnecessary re-fetches**: Because all delivery data is passed down from the server component as a prop, the client component can perform all filtering and sorting in memory without making additional network requests.

### Summary of the Hybrid Approach

| Concern | Rendering Strategy | Reason |
|---|---|---|
| Fetching delivery data | Server-Side (SSR) | Performance, SEO, security |
| Filtering by status | Client-Side (CSR) | Requires `useState` for interactivity |
| Sorting by date | Client-Side (CSR) | Requires `useState` for interactivity |
| Searching by patient name | Client-Side (CSR) | Requires `useState` for interactivity |
| Pagination | Client-Side (CSR) | Requires `useState` for interactivity |

This hybrid pattern — **fetch on the server, interact on the client** — is a best practice in Next.js App Router applications. It combines the performance and SEO benefits of SSR with the rich interactivity of CSR, without the trade-offs of using either approach exclusively.
