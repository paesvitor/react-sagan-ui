export const imports = {
  'readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "readme" */ 'readme.mdx'),
  'src/Alert/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-alert-alert" */ 'src/Alert/Alert.mdx'),
  'src/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-button" */ 'src/Button/Button.mdx'),
}
