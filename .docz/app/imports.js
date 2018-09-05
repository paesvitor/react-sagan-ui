export const imports = {
  'src/Alert/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-alert-alert" */ 'src/Alert/Alert.mdx'),
  'src/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-button" */ 'src/Button/Button.mdx'),
  'src/Documentaion/GettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-getting-started" */ 'src/Documentaion/GettingStarted.mdx'),
}
