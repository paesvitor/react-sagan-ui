const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---example-readme-md": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/example/README.md"))),
  "component---src-documentaion-getting-started-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/documentaion/GettingStarted.mdx"))),
  "component---src-documentaion-helpers-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/documentaion/Helpers.mdx"))),
  "component---src-components-atoms-button-docs-button-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/components/atoms/Button/__docs/Button.mdx"))),
  "component---src-components-atoms-alert-docs-alert-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/components/atoms/Alert/__docs/Alert.mdx"))),
  "component---src-components-atoms-button-group-docs-button-group-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/components/atoms/ButtonGroup/__docs/ButtonGroup.mdx"))),
  "component---src-components-molecules-form-docs-form-mdx": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/src/components/molecules/Form/__docs/Form.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/vitorpaes/development/libs/sagan/.docz/src/pages/404.js")))
}

