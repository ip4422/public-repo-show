const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@layout-header-background': '#24292e',
              '@list-header-background': '#f1f8ff',
              '@breadcrumb-base-color': '#fff',
              '@breadcrumb-last-item-color': '#fff',
              '@breadcrumb-font-size': 'ceil(@font-size-base * 1.42)',
              '@breadcrumb-icon-font-size': 'ceil(@font-size-base * 1.42)',
              '@breadcrumb-link-color': '#fff',
              '@breadcrumb-link-color-hover': 'rgba(255, 255, 255, 0.6)',
              '@breadcrumb-separator-color': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
