// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(97, 01, 05)',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
