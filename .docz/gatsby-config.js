const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Sagan Ui',
    description: 'React ui components kit',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/vitorpaes/development/libs/sagan/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Sagan Ui',
        description: 'React ui components kit',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/vitorpaes/development/libs/sagan',
          templates:
            '/Users/vitorpaes/development/libs/sagan/node_modules/docz-core/dist/templates',
          packageJson: '/Users/vitorpaes/development/libs/sagan/package.json',
          docz: '/Users/vitorpaes/development/libs/sagan/.docz',
          cache: '/Users/vitorpaes/development/libs/sagan/.docz/.cache',
          app: '/Users/vitorpaes/development/libs/sagan/.docz/app',
          appPublic: '/Users/vitorpaes/development/libs/sagan/.docz/public',
          appNodeModules:
            '/Users/vitorpaes/development/libs/sagan/node_modules',
          appPackageJson:
            '/Users/vitorpaes/development/libs/sagan/package.json',
          appYarnLock:
            '/Users/vitorpaes/development/libs/sagan/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/vitorpaes/development/libs/sagan/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/vitorpaes/development/libs/sagan/gatsby-config.js',
          gatsbyBrowser:
            '/Users/vitorpaes/development/libs/sagan/gatsby-browser.js',
          gatsbyNode: '/Users/vitorpaes/development/libs/sagan/gatsby-node.js',
          gatsbySSR: '/Users/vitorpaes/development/libs/sagan/gatsby-ssr.js',
          importsJs:
            '/Users/vitorpaes/development/libs/sagan/.docz/app/imports.js',
          rootJs: '/Users/vitorpaes/development/libs/sagan/.docz/app/root.jsx',
          indexJs:
            '/Users/vitorpaes/development/libs/sagan/.docz/app/index.jsx',
          indexHtml:
            '/Users/vitorpaes/development/libs/sagan/.docz/app/index.html',
          db: '/Users/vitorpaes/development/libs/sagan/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
