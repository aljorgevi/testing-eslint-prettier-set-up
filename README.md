// Arrange

// Act // .. nothing

// Assert


# Jest + React Testing Library
## React + Vite

1. Instalaciones:
```
npm install -D jest babel-jest @babel/preset-env @babel/preset-react 
npm install -D @testing-library/react @types/jest jest-environment-jsdom
```

2. if Fetch API:
```
npm install -D whatwg-fetch
```

3. __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4.  __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Jest config & setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
import 'whatwg-fetch'; 
```
