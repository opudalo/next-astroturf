
Run it, it will crash, caused by value interpolation:
```jshttps://github.com/opudalo/next-astroturf/blob/master/README.md
import { dark } from '../theme'
const styles = css`
  .box { color: ${dark} }

`
```
Also, even if you remove it, `css` api doesn't work :(

-------



# Example app with [astroturf](https://github.com/4Catalyzer/astroturf)

This example features how to use [astroturf](https://github.com/4Catalyzer/astroturf) as the zero-runtime CSS-in-JS styling solution instead of [styled-jsx](https://github.com/zeit/styled-jsx).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-astroturf)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-astroturf with-astroturf-app
# or
yarn create next-app --example with-astroturf with-astroturf-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-astroturf
cd with-astroturf
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
