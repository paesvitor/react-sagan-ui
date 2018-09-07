export const imports = {
  'src/Alert/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-alert-alert" */ 'src/Alert/Alert.mdx'),
  'src/ButtonGroup/ButtonGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-group-button-group" */ 'src/ButtonGroup/ButtonGroup.mdx'),
  'src/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-button" */ 'src/Button/Button.mdx'),
  'src/Card/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-card-card" */ 'src/Card/Card.mdx'),
  'src/Documentaion/GettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-getting-started" */ 'src/Documentaion/GettingStarted.mdx'),
  'src/Input/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-input-input" */ 'src/Input/Input.mdx'),
}
