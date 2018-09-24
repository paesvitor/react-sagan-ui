export const imports = {
  'src/documentaion/GettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-getting-started" */ 'src/documentaion/GettingStarted.mdx'),
  'src/documentaion/Helpers.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-helpers" */ 'src/documentaion/Helpers.mdx'),
  'src/components/atoms/Alert/__docs/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-alert-docs-alert" */ 'src/components/atoms/Alert/__docs/Alert.mdx'),
  'src/components/atoms/Button/__docs/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button-docs-button" */ 'src/components/atoms/Button/__docs/Button.mdx'),
  'src/components/atoms/ButtonGroup/__docs/ButtonGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button-group-docs-button-group" */ 'src/components/atoms/ButtonGroup/__docs/ButtonGroup.mdx'),
  'src/components/molecules/Form/__docs/Form.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-form-docs-form" */ 'src/components/molecules/Form/__docs/Form.mdx'),
}
