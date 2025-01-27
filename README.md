# ts-yw-1

## Commands to Run

```
npx npm@7 install
./run.sh
```

## Extra Info

- If stuff is not building, need to delete the `tsconfig.tsbuildinfo` files.
- The trick to making the packages build when you run `yarn` is to add this to the root `tsconfig.json`: 
```
"references": [
  { "path": "packages/protect" },
  { "path": "packages/cli" }
]
```
- Getting one package to import another (locally, i.e. without pulling it from npmjs.org) is like this... say you want the `cli` package to import the `protect` package:
  - in the `cli` package `tsconfig.json` add
    ```
    "references": [
      { "path": "../../packages/protect" },
    ]
    ```
  - in the `cli` package, where you want to use the `protect` package, use `import { doProtect } from "@maxjeffos/protect";` or equivalent (based on your import needs). Note that in this case, `@maxjeffos/protect` is the full package name as defined in the `protect` package's `package.json`.
