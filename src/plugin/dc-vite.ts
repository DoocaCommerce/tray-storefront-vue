import { loadEnv } from 'vite'

export function doocaPlugin(dcConfig) {
  return {
    name: 'vite-plugin-dooca',
    config(config, { mode }) {
      if (!dcConfig) throw new Error('dooca config is required')

      process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

      config.define = {
        ...config.define,
        DC_CONFIG: {
          api_url: process.env.VITE_API_URL,
          token: dcConfig.token
        }
      }
    }
  }
}