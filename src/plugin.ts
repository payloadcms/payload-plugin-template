import type { Config } from 'payload'

import type { MyPluginOptions } from './types.js'


export const myPlugin =
  (pluginOptions: MyPluginOptions) =>
  (incomingConfig: Config): Config => {
    let config = { ...incomingConfig }

    if (pluginOptions.debug) {
      // eslint-disable-next-line no-console
      console.log('Entering myPlugin')
    }

    /**
     * Make changes to the config object here
     *
     * Typically, you would:
     * - loop through the collections and fields
     * - spread any existing fields and collections into new objects
     * - make changes to the the specific collection/field
     */

    config = {
      ...config,
      collections: (config.collections || []).map((collection) => {
        const modifiedCollection = { ...collection }

        /**
         * Make changes to the collection here
         */

        modifiedCollection.fields = (modifiedCollection.fields || []).map((field) => {
          const newField = { ...field }

          /**
           * Make changes to the fields here
           */

          return newField
        })

        return modifiedCollection
      }),
    }
    return config
  }
