# NextJS, Typescript, Ava Example

A simple example using NextJS 12, typescript and ava without unnecessary transpilation.

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Write ava tests in typescript
- Test against NextJS API endpoints or pages
- No compile directory (`dist`/`build`) to worry about in development
- Full NextJS middleware support in tests
- Tests can run in isolation in parallel
- Automatic/simple server teardown

## Scripts

- `dev` - Run the NextJS development server
- `build` - Build the NextJS static application
- `start` - Run the NextJS production build
- `test` - Run ava tests

### Useful Commands

- **Run individual test file** - `yarn run ava ./tests/ava.test.ts`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How does the test fixture work?

See [nextjs-fixture](nextjs-fixture/index.ts)

## How do I write tests?

See [hello.test.ts](tests/hello.test.ts)
