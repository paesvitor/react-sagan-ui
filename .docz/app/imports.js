export const imports = {
  'src/documentaion/GettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-getting-started" */ 'src/documentaion/GettingStarted.mdx'),
  'src/documentaion/Helpers.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentaion-helpers" */ 'src/documentaion/Helpers.mdx'),
}
