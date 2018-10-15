# Multi Tag

[![travis build](https://img.shields.io/travis/mts/multi-tag.svg?style=flat-square)](https://travis-ci.org/mts/multi-tag)

> React UI for entering multiple tags as input

## Approach
Development approach is to build big and complex components by first breaking them down into smaller and less complex components to promote `modularity`, `reusability`, `scalability`, `maintainability` via `Component Driven Design (CDD)` and `Atomic Design Patterns`. Following this approach, smaller pieces of the whole are built first as `atoms` and `molecules` implemented as React components to together form `organisms` and `templates`.

## Web technologies & patterns
- Create React App

  This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
  `react` and `react-dom` are used to render the layout

- Storybook

  [Storybook](https://github.com/storybooks/storybook) is used as a development environment for all the React UI components. It allows you to browse this component library, view the different states of each component, and interactively develop and test components.

- Atomic Design

  `MultiTag` component is built using [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) patterns to promote `reusability` and `scalability` with a `clearly defined component structure`.

  Components are built from small to big in terms of complexity. Atoms are built to form molecules,
  molecules to form a single `MultiTag` organism and the organism is populated with static data in
  `MultiTagCard` template.

  `Atoms` are categorized as `Image`, `Text` and `Title` components.
  `Molecules` are categorized as `Info` and `List` components.

  `MultiTag` is the only organism.

  `MultiTagCard` is the only template.

- Babel

  [Babel](https://github.com/babel/babel) is used for transpiling ES6 to ES5 for the browser.

- Webpack

  [Webpack](https://github.com/webpack/webpack) is used to create bundles for development, production and storybook

- Sass

  [Sass](http://sass-lang.com/) CSS3 extention is used for adding nested rules, variables, mixins, selector inheritance.

- BEM

  [BEM](http://getbem.com/) Block Element Modifier methodology is used to to create reusable components by enabling independent blocks and CSS selectors to promote modularity and flexibility.

- HTTP client and request mocking
  [axios](https://github.com/mzabriskie/axios) is used to make HTTP requests
  [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) is used to mock HTTP requests

## Development Notes
- create-react-app is used to initially create the package.

- Application entry point is `/src/index.js` as indicated in `/config/webpack.config.dev.js` and `/config/webpack.config.prod.js` files

- Application is already ejected from react-scripts using `npm run eject` to extend webpack configuration with
`scss` loader.

- `/.storybook/config.js` contains Storybook configuration
`/.storybook/webpack.config.js` extends webpack configuration for Storybook with `scss` loader.

- `sass-loader` and `node-sass` packages are used by webpack for compiling `.scss` files.

## Available Scripts

- `npm run build`
Builds the app into `build` folder and Storybook into .storybook-static folder as static websites.<br>

- `npm run prebuild`
Removes build and .storybook-static folders.<br>

- `npm run start-app`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build-app`
Builds the app for production into the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run start-storybook`
Runs Storybook<br>
Runs Storybook and shows all available components and their stories.
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

- `npm run build-storybook`
Export Storybook as a static website into `.storybook-static` folder.<br>

- `npm run deploy-storybook`
`Deploy static website in the .storybook-static` folder to GitHub pages.<br>

- `npm test`
Launches the test runner in the interactive watch mode.

## Directory structure
```
  |-components
   |---Atoms
   |-----Image
   |-------Icon
   |-----Text
   |-------Info
   |-------Input
   |-------Label
   |-----Title
   |-------Heading
   |---Molecules
   |-----Info
   |-------Tag
   |-----List
   |-------TagList
   |---Organisms
   |-----Card
   |-------MultiTag
   |---Templates
   |-----Input
   |-------MultiTagCard
  |-data
  |-fonts
  |-stories
  |-theming
  |-utility
```

- `components` folder contains all the components structured in `atomic design patterns`
as `atoms`, `molecules`, `organisms` and `templates` taking into account the complexity of each component.

- `data` folder contains the static data used to populate the components with sample data.

- `font` folder contains the IcoMoon fonts file

- `stories` folder contains the stories of all components in `index.js` file

- `theming` folder contains CSS styling configuration
  implementing a theme containing font and color choices

- `utility` folder contains font utility to collect icomoon font paths

## Components

### Atoms

#### Atoms > Image
- `Icon` is a
  stateless function component
  receiving `name, width, height, fill, className` props
`rendering`
  various icons depending on name.

Sample usages are as follows:
```javascript
  <Icon name={'cross'} width={"10"} height={"10"} />
  <Icon name={'check'} width={"10"} height={"10"} />
```

#### Atoms > Text
- `Info` is a
  stateless function component
  receiving `size, body` props
`rendering`
  a styled span

Sample usage is as follows:
```javascript
  <Info body={"Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen"} />
```

- `Input` is a
  stateful class component
  receiving `borderless, onChange, onKeyDown` props
`rendering`
  an input
`handling`
  `onKeyDown` and `onChange` events

Sample usage is as follows:
```javascript
  <Input />
```

- `Label` is a
  stateless function component
  receiving `size, text` props
`rendering`
  a styled span

Sample usage is as follows:
```javascript
  <Label text={"E-mailadressen"} />
```

#### Atoms > Title
- `Heading` is a
  stateless function component
  receiving `size, text` props
`rendering` a conditionally styled span
  indicating various sizes

Sample usages are as follows:
```javascript
  <Heading size={'h1'} text={"Uitbetalingen"} />
  <Heading size={'h2'} text={"Uitbetalingen"} />
  <Heading size={'h3'} text={"Uitbetalingen"} />
  <Heading size={'h4'} text={"Uitbetalingen"} />
```

### Molecules

#### Molecules > Info
- `Tag` is a
  stateless function component
  receiving `onMouseDown, text, id` props
`rendering`
  an input
`handling`
  `onMouseDown` event

Sample usage is as follows:
```javascript
  <Tag id={emails.items[0].id} text={emails.items[0].text} />
```

#### Molecules > List
- `TagList` is a
  stateful class component
  receiving an `array` of `id and text` props
`rendering`
  a list of `Tag` components and an `Input` component
`handling`
  `onMouseDown` event of `Tag` component
  `onChange`, `onKeyDown` event of `Input` component

Sample usage is as follows:
```javascript
  <TagList items={emails.items} />
```

### Organisms

#### Organisms > Card
- `MultiTag` is a
  stateless function component
  receiving `intro, mails, telephones` props
`rendering`
  `Heading`, `Label` and `Input` components

Sample usage is as follows:
```javascript
  <MultiTag
    intro={intro}
    mails={emails}
    telephones={telephones}
  />
```

### Templates

#### Templates > Input
- `MultiTagCard` is a
  stateless function component
  receiving `intro, mails, telephones` props
`rendering`
  a `MultiTag` component

Sample usage is as follows:
```javascript
  <MultiTagCard
    intro={intro}
    mails={emails}
    telephones={telephones}
  />
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[multi-tag]: https://github.com/mts/multi-tag
[react]: https://github.com/facebook/react
