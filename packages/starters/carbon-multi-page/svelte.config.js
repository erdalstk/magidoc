import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { optimizeImports } from 'carbon-preprocess-svelte'
import _ from 'lodash'
import { templates } from '@magidoc/plugin-starter-variables'
import { loadVariables } from './magidoc.config.js'

const variables = loadVariables()

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: [preprocess(), optimizeImports()],
  kit: {
    adapter: adapter({
      strict: false
    }),
    paths: {
      base: templates.SITE_ROOT.getOrDefault(variables, ''),
    },
  },
}

export default config
