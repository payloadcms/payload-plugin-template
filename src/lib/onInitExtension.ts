import type { Payload } from 'payload'

import type { MyPluginOptions } from '../types.js'

export const onInitExtension = (pluginOptions: MyPluginOptions, payload: Payload): void => {
  try {
    payload.logger.info({ msg: 'Hello from onInitExtension' })
  } catch (err: unknown) {
    payload.logger.error({ err, msg: 'Error in onInitExtension' })
  }
}
