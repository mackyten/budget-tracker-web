# Budget Tracker (Web)

[![CI](https://github.com/mackyten/budget-tracker-web/actions/workflows/ci.yml/badge.svg)](https://github.com/mackyten/budget-tracker-web/actions/workflows/ci.yml)

React front end for tracking income, cash and bank balances. It talks to [budget-tracker-api](https://github.com/mackyten/budget-tracker-api).

## Tech stack

- React 18, TypeScript (Create React App)
- MUI, Tailwind CSS
- TanStack Query for server state, Zustand for client state
- React Hook Form with Zod validation, Axios

## Features

- Create income and expense entries with cash and bank breakdowns
- Paginated income list on the home page
- Deployed through GitHub Actions to Azure

## Getting started

```bash
npm install
npm start       # http://localhost:3000
npm run build
```

Point the app at your API instance in `src/common/base-api.ts`.

## Structure

```
src/
  features/   create-expense, home-page, info-page (api, store, components per feature)
  common/     shared components, helpers, theme, routes
```
