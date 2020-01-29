## spfx-react-redux-boilerplate

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

- lib/\* - intermediate-stage commonjs build artifacts
- dist/\* - the bundled script, along with other resources
- deploy/\* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

## To search for typings

[TypeScript Types Search](https://microsoft.github.io/TypeSearch/)

> _Ref_ - https://microsoft.github.io/TypeSearch/

# Index

1. Setup Router
   > src\webparts\spfxDemoWp\components\SpfxDemoWp.tsx
2. Setup Store
   > src\webparts\spfxDemoWp\store\index.ts
3. Route change update to redux
   > src\webparts\spfxDemoWp\components\Navigation.tsx
4. Call action from Store
   > src\webparts\spfxDemoWp\pages\Home.tsx
5. Bind State and Action from Store to Prop in component
   > src\webparts\spfxDemoWp\pages\Home.tsx
6. Call SharePoint Rest API
   > src\webparts\spfxDemoWp\pages\Home.tsx
7. Call 3rd party API
   > src\webparts\spfxDemoWp\helper\countries.ts
8. Class component
   > src\webparts\spfxDemoWp\pages\Home.tsx
9. Functional component
   > src\webparts\spfxDemoWp\Layout\withNav.tsx
10. Generate routes from routes.ts file
    > src\webparts\spfxDemoWp\components\SpfxDemoWp.tsx
11. HOC example
    > src\webparts\spfxDemoWp\components\SpfxDemoWp.tsx
