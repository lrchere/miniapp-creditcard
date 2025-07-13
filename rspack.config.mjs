import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

/** @type {(env: import('@callstack/repack').EnvOptions) => import('@rspack/core').Configuration} */
export default env => {
  const { mode, context, platform } = env;

  return {
    mode,
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'MiniAppTemplate',
        filename: 'MiniAppTemplate.js.bundle',
        exposes: {
          './App': './App',
        },
        dts: false,
        shared: {
          react: {
            singleton: true,
            eager: false,
            requiredVersion: '19.1.0',
          },
          'react-native': {
            singleton: true,
            eager: false,
            requiredVersion: '0.80.1',
          },
          '@react-navigation/native': {
            singleton: true,
            eager: false,
            requiredVersion: '^7.1.14',
            version: '7.1.14',
          },
          '@react-navigation/native-stack': {
            singleton: true,
            eager: false,
            requiredVersion: '^7.3.21',
            version: '7.3.21',
          },
          'react-native-safe-area-context': {
            singleton: true,
            eager: false,
            requiredVersion: '^5.5.2',
          },
          'react-native-screens': {
            singleton: true,
            eager: false,
            requiredVersion: '^4.11.1',
          },
          '@react-navigation/elements': {
            singleton: true,
            eager: false,
            requiredVersion: '^2.5.2',
            version: '2.5.2',
          },
        },
      }),
    ],
  };
};
