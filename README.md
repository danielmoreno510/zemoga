This is a project developed with Next.Js
## Run

```bash
json-server --watch db.json --port 3001
```

Development environment:

```bash
npm run dev
```

Production environment:

```bash
npm run build
npm run start
```

Tests:

```bash
npm run test
npx jest --coverage
```

## Libraries

For the development of this application the following libraries were used:

- Redux (Sagas)
- Axios
- immer
- json-server
- jest
- lint

## Methodology

Redux was implemented to manage the state of the application, when an action is executed and the saga is triggered and the data will be saved in the redux store

Design patterns were implemented: composition, propagation and separation of container components and presentation components

A HOC was implemented for the load indicator component, in addition, typescript was used with its respective data types

The _app.tsx file was created to add a layout and handle the application as a SPA.